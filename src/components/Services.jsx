import { motion } from "framer-motion";
import { services } from "../data/siteData";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative bg-anrra-dark px-5 py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("servicesSection.eyebrow")}
          title={t("servicesSection.title")}
          description={t("servicesSection.description")}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-anrra-blue/50 hover:bg-white/[0.07]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(`services.${service.key}.title`)}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anrra-dark via-anrra-dark/30 to-transparent" />

                  <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-anrra-dark shadow-xl">
                    <Icon />
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-white">
                    {t(`services.${service.key}.title`)}
                  </h3>

                  <p className="mt-4 leading-7 text-white/60">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;