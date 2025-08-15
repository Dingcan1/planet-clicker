"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { theme } from "@/config/theme";
import { content } from "@/config/content";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  onSearch?: (e: React.FormEvent) => void;
}

export function Header({ searchQuery = "", onSearchChange = () => {}, onSearch = () => {} }: HeaderProps) {
  if (!layout.header.isVisible) return null;

  // 添加路径解析
  // const pathname = usePathname(); // No longer needed for title generation
  // const isHomePage = pathname === "/"; // No longer needed for title generation

  // 格式化路径为标题 - 现在固定返回品牌名称
  const formatPathToTitle = () => {
    return content.header.title; // content.header.title is siteConfig.name
  };

  const headerClassName = cn(
    layout.header.isVisible ? "" : "hidden",
    theme.header.layout.position,
    theme.header.layout.zIndex,
    "border-b border-primary/20",
    "bg-background/80 backdrop-blur-md",
    "star-bg",
  );

  const containerClassName = cn(
    theme.header.spacing.container,
    "flex",
    theme.header.layout.height,
    "items-center justify-between",
    layout.header.container.padding
  );

  return (
    <header className={headerClassName}>
      <div className={containerClassName}>
        {/* 左侧 Logo 和标题 - 宇宙主题 */}
        <div className={cn(theme.header.layout.logo.wrapper, "group")}>
          <Link href="/">
            <div className="relative">
              <img
                src={layout.header.logo.src}
                alt={content.header.title}
                className={cn(
                  layout.header.logo.size,
                  "rounded-full planet-glow cursor-pointer",
                  "border-2 border-primary/30 p-1"
                )}
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </Link>
          <Link href="/" className="no-underline">
            <h1 className={cn(
              layout.header.logoSize,
              "font-bold relative",
              "bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent",
              "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full"
            )}>
              {formatPathToTitle()}
            </h1>
          </Link>
        </div>

        {/* 右侧导航和搜索 */}
        <div className={theme.header.layout.nav.wrapper}>
          <nav className={cn(theme.header.layout.nav.list, "space-x-1")}>
            {content.header.navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all rounded-full px-4 py-2",
                  "border border-transparent",
                  "hover:text-primary hover:border-primary/30 hover:bg-primary/5",
                  "relative overflow-hidden group"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  // 修复：在当前页面查找锚点，如果找不到才跳转到首页
                  const targetElement = document.querySelector(link.href);
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: 'smooth'
                    });
                  } else {
                    // 如果当前页面没有找到目标元素，则跳转到首页对应的锚点
                    window.location.href = '/' + link.href;
                  }
                }}
              >
                <span className="relative z-10">{link.text}</span>
                <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            ))}
          </nav>

          {layout.header.searchEnabled && (
            <form
              onSubmit={onSearch}
              className={cn("flex", layout.header.maxWidth, "items-center", theme.header.spacing.search, "relative")}
            >
              <div className="relative group w-full">
                <Input
                  type="search"
                  placeholder={content.header.search.placeholder}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  aria-label={content.header.search.ariaLabel}
                  className="rounded-full border-primary/20 focus-visible:ring-primary pr-10 bg-background/50 backdrop-blur-sm"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full rounded-r-full hover:bg-primary/10 text-primary"
                  aria-label={content.header.search.buttonAriaLabel}
                >
                  <Search className="h-4 w-4" />
                </Button>
                <span className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/30 pointer-events-none transition-colors"></span>
              </div>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
