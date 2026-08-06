import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuMenu } from "react-icons/lu";

import { LanguageSwitcher } from "~/components/language-switcher";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export function SiteHeader() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  // The header stays invisible over the hero and only gains its border and
  // blur once the page moves — less chrome competing with the content.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="font-serif text-lg font-bold tracking-tight transition-colors hover:text-primary"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={t("nav.menu")}
              >
                <LuMenu />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="min-w-[10rem]">
              {siteConfig.nav.map((item) => (
                <DropdownMenuItem key={item.id} asChild>
                  <a href={`#${item.id}`} className="w-full text-sm">
                    {t(item.label)}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
