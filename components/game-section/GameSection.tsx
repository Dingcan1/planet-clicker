'use client';

import { useState, useRef } from 'react';
import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface GameSectionProps {
  content?: typeof defaultContent;
}

export function GameSection({ content = defaultContent }: GameSectionProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <section
      id="game-section"
      className={cn(
        theme.gameSection.layout.section,
        theme.layout.section.scrollMargin
      )}
    >
      {layout.gameSection.isVisible.title && (
        <div className="text-center mb-6">
          <h2 className={cn(
            theme.gameSection.typography.title,
            theme.gameSection.spacing.title,
            "relative inline-block cosmic-gradient text-transparent bg-clip-text font-bold"
          )}>
            {content.gameSection.title}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground mt-2">Click planets, generate energy, expand your cosmic empire</p>
        </div>
      )}

      {/* 游戏容器 - 宇宙主题 */}
      <div
        ref={containerRef}
        className={cn(
          "w-full max-w-4xl mx-auto overflow-hidden shadow-xl relative cosmic-card",
          theme.gameSection.colors.container,
          "mb-0 rounded-lg border-primary/30" // 添加圆角和边框
        )}
      >
        {content.gameSection && content.gameSection.game ? (
          <iframe
            src={content.gameSection.game.url}
            className="w-full border-0"
            style={{ height: '560px' }} /* 增加固定高度，可以根据需要调整 */
            allow="fullscreen"
            title={content.gameSection.game.title}
          />
        ) : (
          <div className="w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" style={{ height: '800px' }}>
            <p className="text-gray-500 dark:text-gray-400">游戏加载中...</p>
          </div>
        )}
      </div>

      {/* 按钮行 - 宇宙主题 */}
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-16 bg-accent/20 backdrop-blur-sm text-white rounded-b-lg p-3 border-t border-primary/20 shadow-lg">
        {/* 能量计数器 */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center planet-glow">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <span className="text-sm font-medium">Energy: <span className="text-primary font-bold">0</span></span>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* 设置按钮 */}
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-primary/20 text-white rounded-full p-1.5 transition-colors"
            aria-label="Settings"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </Button>
          
          {/* 全屏按钮 */}
          <Button
            onClick={toggleFullscreen}
            size="icon"
            variant="ghost"
            className="hover:bg-primary/20 text-white rounded-full p-1.5 transition-colors"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 9L4 4m0 0l5 0M4 4l0 5" />
              <path d="M15 9l5-5m0 0h-5m5 0v5" />
              <path d="M9 15l-5 5m0 0h5m-5 0v-5" />
              <path d="M15 15l5 5m0 0v-5m0 5h-5" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
