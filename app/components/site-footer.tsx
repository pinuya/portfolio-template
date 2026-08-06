import { useTranslation } from "react-i18next";

import { HeartDetail } from "~/components/heart-detail";

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="container pb-10">
      <HeartDetail />

      <div className="flex flex-col items-center justify-between gap-2 pt-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {t("footer.rights")}
        </p>
        <p>{t("footer.builtWith")}</p>
      </div>
    </footer>
  );
}
