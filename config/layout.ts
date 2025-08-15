export const layout = {
  header: {
    isVisible: true,
    maxWidth: "max-w-sm",
    searchEnabled: false,
    logoSize: "text-2xl",
    container: {
      padding: "px-4 md:px-8",
    },
    logo: {
      src: "/assets/img/android-chrome-192x192.jpg", // 您可以将此路径改为新logo的路径
      size: "w-12 h-12", // logo的显示尺寸，可以根据需要调整
    }
  },
  gameSection: {
    isVisible: {
      title: false  // 控制游戏区标题是否显示
    }
  },
  footer: {
    isVisible: true,
    sections: {
      about: true,
      quickLinks: true,
      social: true,
      legal: true,
      games: true,  // 添加 games section
    }
  },
  whatIs: {
    sectionId: "what-is",
    grid: {
      columns: "grid grid-cols-1 md:grid-cols-3 gap-8 items-center",
      gap: "gap-8",
    },
    content: {
      span: "md:col-span-2"
    },
    logo: {
      size: {
        width: "w-48",
        height: "h-48"
      }
    }
  },
  faq: {
    sectionId: "faq",
    accordion: {
      type: "single",
      collapsible: true
    }
  }
} as const;






