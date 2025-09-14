export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = url.pathname.slice(1); // 去掉开头的 /
    
    // 添加 CORS 头
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    
    // 处理 OPTIONS 请求
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
    
    // 处理根路径
    if (key === '' || key === '/') {
      return new Response('Planet Clicker CDN - Available games: /game/planet-clicker/index.html', { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'text/plain' }
      });
    }
    
    // 检查 R2 绑定是否存在
    if (!env.PLANET_CLICKER_BUCKET) {
      console.error('R2 bucket not configured:', env);
      return new Response('R2 bucket not configured. Available env keys: ' + Object.keys(env).join(', '), { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'text/plain' }
      });
    }
    
    // 从 R2 获取文件
    // 如果 key 不包含 public/ 前缀，则添加它
    const r2Key = key.startsWith('public/') ? key : `public/${key}`;
    const object = await env.PLANET_CLICKER_BUCKET.get(r2Key);
    
    if (object === null) {
      return new Response('File Not Found', { 
        status: 404,
        headers: corsHeaders 
      });
    }
    
    // 设置响应头
    const headers = new Headers(corsHeaders);
    object.writeHttpMetadata(headers);
    headers.set('etag', object.httpEtag);
    headers.set('Cache-Control', 'public, max-age=31536000'); // 1年缓存
    
    return new Response(object.body, {
      headers,
    });
  },
};
