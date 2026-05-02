import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-anrra-dark px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        
        <div className="flex items-center gap-3">
          
          <img
            src="/images/anrra.png"
            alt="Anrra Centrum logo"
            className="h-11 w-16 rounded-md bg-white object-contain px-2"
          />

          <div>
            <p className="font-bold text-white">{t("footer.company")}</p>
            <p className="text-sm text-white/45">{t("footer.subtitle")}</p>
          </div>

        </div>

        <p className="text-sm text-white/45">
          © {new Date().getFullYear()} {t("footer.company")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;