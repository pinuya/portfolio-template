import { Form } from "react-router";
import { useTranslation } from "react-i18next";
import { LuLanguages } from "react-icons/lu";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { cn } from "~/lib/utils";

const LANGUAGES = [
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "en", flag: "🇺🇸", label: "English" },
];

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={t("nav.language")}
          title={t("nav.language")}
        >
          <LuLanguages />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[10rem]">
        {LANGUAGES.map((language) => (
          <DropdownMenuItem key={language.code} asChild>
            {/* A GET form keeps language switching working without JavaScript */}
            <Form className="w-full">
              <button
                type="submit"
                name="lng"
                value={language.code}
                className={cn(
                  "flex w-full items-center gap-2.5 text-left text-sm",
                  i18n.language === language.code && "font-medium text-primary"
                )}
              >
                <span aria-hidden>{language.flag}</span>
                {language.label}
              </button>
            </Form>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
