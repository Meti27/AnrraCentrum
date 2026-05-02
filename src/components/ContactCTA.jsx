import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-anrra-dark px-5 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="p-8 md:p-12 lg:p-16"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-anrra-blue">
              {t("contactSection.eyebrow")}
            </p>

            <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              {t("contactSection.title")}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              {t("contactSection.description")}
            </p>

            <div className="mt-10 grid gap-4">
              <a
                href="tel:+38975530540"
                className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-anrra-blue/15 text-anrra-blue group-hover:bg-anrra-blue group-hover:text-white">
                  <FiPhone />
                </span>
                <div>
                  <p className="text-sm text-white/45">{t("contactSection.phone")}</p>
                  <p className="font-semibold text-white">075 530 540</p>
                </div>
              </a>

              <a
                href="mailto:info@anrashpk.com"
                className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-anrra-blue/15 text-anrra-blue group-hover:bg-anrra-blue group-hover:text-white">
                  <FiMail />
                </span>
                <div>
                  <p className="text-sm text-white/45">{t("contactSection.email")}</p>
                  <p className="font-semibold text-white">info@anrashpk.com</p>
                </div>
              </a>

              <div className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-anrra-blue/15 text-anrra-blue">
                  <FiMapPin />
                </span>
                <div>
                  <p className="text-sm text-white/45">{t("contactSection.address")}</p>
                  <p className="font-semibold text-white">
                    {t("contactSection.addressValue")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative min-h-[520px]">
            <img
              src="/images/road-cleaning-truck.jpg"
              alt="Anrra Centrum road cleaning truck"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-anrra-dark/80 to-transparent lg:bg-gradient-to-l" />

            <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-anrra-dark/70 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-anrra-blue">
                {t("contactSection.sideBadge")}
              </p>
              <p className="mt-2 text-2xl font-bold text-white">
                {t("contactSection.sideTitle")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;