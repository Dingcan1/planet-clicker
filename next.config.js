/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      // 静态资源走 R2 Worker（本地 public/assets 已被 .vercelignore 忽略）
      {
        source: '/assets/:path*',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/public/assets/:path*',
      },
      // 兼容直接请求 /public/** 的路径
      {
        source: '/public/:path*',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/public/:path*',
      },
      // 常见根级别图标/清单的兼容（浏览器会直接请求根路径）
      {
        source: '/favicon.ico',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/public/assets/img/favicon.ico',
      },
      {
        source: '/site.webmanifest',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/public/assets/img/site.webmanifest',
      },
      {
        source: '/sitemap.xml',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/public/sitemap.xml',
      },
      {
        source: '/robots.txt',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/public/robots.txt',
      },
      {
        source: '/planet-clicker.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/planet-clicker/index.html',
      },
      {
        source: '/bubble-shoot-merge-box-2048.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/bubble-shoot-merge-box-2048/index.html',
      },
      {
        source: '/crazy-cattle-3d.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/crazycattle3d/index.html',
      },
      {
        source: '/crazy-cow-3d.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/crazycow3d/index.html',
      },
      {
        source: '/cheese-chompers-3d.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/cheesechompers3d/index.html',
      },
      {
        source: '/brainrot-clicker.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/brainrot-clicker/index.html',
      },
      {
        source: '/basketball-bros-unblocked.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/basketball-bros-unblocked/index.html',
      },
      {
        source: '/pokemon-gamma-emerald.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/pokemon-gamma-emerald/index.html',
      },
      {
        source: '/crazy-chicken-3d.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/crazy-chicken-3d/index.html',
      },
      {
        source: '/sprunki-incredibox.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/sprunki-incredibox/index.html',
      },
      {
        source: '/futbol-libre.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/futbol-libre/index.html',
      },
    ]
  }
};

module.exports = nextConfig;


