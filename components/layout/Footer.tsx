import Link from "next/link";
import { Facebook, Twitter, LucideIcon } from "lucide-react";
import { theme } from "@/config/theme";
import { content } from "@/config/content";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const SocialIcons: Record<string, LucideIcon> = {
  Facebook,
  Twitter,
};

export function Footer() {
  if (!layout.footer.isVisible) return null;

  const footerClassName = cn(
    "border-t border-primary/20",
    "bg-background/80 backdrop-blur-md",
    "star-bg"
  );

  const containerClassName = cn(
    theme.footer.layout.container,
    theme.footer.layout.padding
  );

  const gridClassName = cn(theme.footer.layout.grid);

  return (
    <footer className={footerClassName}>
      <div className={containerClassName}>
        <div className={gridClassName}>
          {/* About Section */}
          {layout.footer.sections.about && (
            <div className="cosmic-card bg-accent/10 p-4 rounded-lg">
              <h3 className={cn("font-semibold relative inline-block", theme.footer.spacing.sectionTitle, "cosmic-gradient text-transparent bg-clip-text")}>
                {content.footer.about.title}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full"></span>
              </h3>
              <p className="text-muted-foreground mt-2">
                {content.footer.about.description}
              </p>
            </div>
          )}

          {/* Games Section */}
          {layout.footer.sections.games && (
            <div className="cosmic-card bg-accent/10 p-4 rounded-lg">
              <h3 className={cn("font-semibold relative inline-block", theme.footer.spacing.sectionTitle, "cosmic-gradient text-transparent bg-clip-text")}>
                {content.footer.games.title}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full"></span>
              </h3>
              <ul className="mt-3 space-y-2">
                {content.footer.games.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm flex items-center group",
                        "text-muted-foreground hover:text-primary transition-colors"
                      )}
                      target="_blank"
                      rel="noopener"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:bg-primary transition-colors"></span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quick Links Section */}
          {layout.footer.sections.quickLinks && (
            <div className="cosmic-card bg-accent/10 p-4 rounded-lg">
              <h3 className={cn("font-semibold relative inline-block", theme.footer.spacing.sectionTitle, "cosmic-gradient text-transparent bg-clip-text")}>
                {content.footer.quickLinks.title}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full"></span>
              </h3>
              <ul className="mt-3 space-y-2">
                {content.footer.quickLinks.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm flex items-center group",
                        "text-muted-foreground hover:text-primary transition-colors"
                      )}
                      target="_blank"
                      rel="noopener"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2 group-hover:bg-primary transition-colors"></span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social Links Section */}
          {layout.footer.sections.social && (
            <div className="cosmic-card bg-accent/10 p-4 rounded-lg">
              <h3 className={cn("font-semibold relative inline-block", theme.footer.spacing.sectionTitle, "cosmic-gradient text-transparent bg-clip-text")}>
                {content.footer.social.title}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full"></span>
              </h3>
              <div className="mt-3 space-y-3">
                {content.footer.social.links.map((link) => {
                  const Icon = SocialIcons[link.icon];
                  return (
                    <div key={link.href} className="flex items-center">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm">{link.icon}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Copyright and Legal Section - 宇宙主题 */}
        <div className="mt-8 pt-8 border-t border-primary/20">
          {/* Updated Copyright and Legal Links Section */}
          <div className="text-center">
            {/* Copyright Line */}
            <p className={cn("text-sm text-muted-foreground mb-3")}>
              © {new Date().getFullYear()} <span className="text-primary">{siteConfig.name}</span>. All rights reserved.
            </p>

            {/* Links Line */}
            {(() => {
              const allLegalLinks = content.footer.legal.links;
              const desiredOrder = ["About Us", "Privacy Policy", "Terms of Service", "Contact Us"];
              const orderedLinks = desiredOrder
                .map(text => allLegalLinks.find(link => link.text === text))
                .filter(link => link !== undefined) as { text: string; href: string }[];

              if (layout.footer.sections.legal && orderedLinks.length > 0) {
                return (
                  <nav aria-label="Footer legal links">
                    <ul className="flex flex-wrap justify-center">
                      {orderedLinks.map((link, index) => (
                        <li key={link.href} className="flex items-center">
                          <Link
                            href={link.href}
                            className={cn(
                              "text-sm text-muted-foreground hover:text-primary transition-colors",
                              "px-2" // Add padding for spacing around pipes
                            )}
                          >
                            {link.text}
                          </Link>
                          {index < orderedLinks.length - 1 && (
                            <span className="text-sm text-primary/30" aria-hidden="true">•</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                );
              }
              return null;
            })()}
            
            {/* 添加宇宙主题的装饰元素 */}
            <div className="mt-4 flex justify-center">
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 rounded-full bg-primary/50 planet-glow"></div>
                <div className="w-2 h-2 rounded-full bg-primary/50 planet-glow"></div>
                <div className="w-1 h-1 rounded-full bg-primary/50 planet-glow"></div>
                <div className="w-2 h-2 rounded-full bg-primary/50 planet-glow"></div>
                <div className="w-1 h-1 rounded-full bg-primary/50 planet-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
