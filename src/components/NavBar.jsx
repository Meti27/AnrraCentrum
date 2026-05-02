import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/siteData";
import { useLanguage } from "../context/LanguageContext";

const languages = ["en", "sq", "mk"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-anrra-dark/85 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-anrra-dark/35 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src="/images/anrra.png"
            alt="Anrra Centrum logo"
            className="h-11 w-16 rounded-md bg-white object-contain px-2"
          />

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-[0.24em] text-white">
              ANRRA
            </p>
            <p className="text-xs uppercase tracking-[0.32em] text-anrra-blue">
              CENTRUM
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}

          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-xs">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`rounded-full px-3 py-2 font-semibold uppercase transition ${
                  language === lang
                    ? "bg-anrra-blue text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <button
          className="rounded-full border border-white/10 bg-white/5 p-3 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="border-t border-white/10 bg-anrra-dark/95 px-5 py-5 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}

              <div className="mt-2 flex items-center gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`rounded-full px-3 py-2 text-xs font-semibold uppercase transition ${
                      language === lang
                        ? "bg-anrra-blue text-white"
                        : "border border-white/10 bg-white/5 text-white/70"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;