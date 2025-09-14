export const siteConfig = {
  name: "Planet Clicker", // 已更改网站名称
  description: "Play Planet Clicker online for free. Click planets, generate energy, and expand your cosmic empire. No download required, start playing instantly in your browser!",
  domain: "freeplanetclicker.com",
  url: "https://freeplanetclicker.com",
  email: "support@crazy-cattle.net",
  author: "Planet Clicker",
  // Cloudflare R2 静态资源公共域名（可用自定义域名或 R2 public bucket 域名）
  // 例如：https://cdn.crazy-cattle.net 或 https://pub-xxxxxxx.r2.dev
  r2BaseUrl: "https://cdn.crazy-cattle.net",
  social: {
    twitter: "CrazyCattle",
    facebook: "CrazyCattle",
  },
  metadata: {
    keywords: ["planet clicker", "clicker game", "online game", "free game", "idle game"],
    themeColor: "#ffffff",
    manifestPath: "/assets/img/site.webmanifest",
  },
  images: {
    icon: {
      favicon: "/assets/img/favicon.ico",
      favicon16: "/assets/img/favicon-16x16.jpg", // 修改为.jpg格式
      favicon32: "/assets/img/favicon-32x32.jpg", // 修改为.jpg格式
      apple: "/assets/img/apple-touch-icon.jpg", // 修改为.jpg格式
      // safari: "/assets/img/safari-pinned-tab.svg",
    },
    og: "/assets/img/crazy-cattle-3d-og-image.png", // 修改为.jpg格式
  },
};