import i18next from "i18next";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import * as i18n from "~/config/i18n";
import { getInitialNamespaces } from "remix-i18next/client";
import { RemixBrowser } from "@remix-run/react";

async function main() {
  await i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
      ...i18n,
      ns: getInitialNamespaces(),
      detection: { order: ["htmlTag"], caches: [] },
    });

  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      </I18nextProvider>
    );
  });
}

main().catch((error) => console.error(error));
