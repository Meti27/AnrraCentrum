import { motion } from "framer-motion";
import { fleetItems } from "../data/siteData";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

function FleetShowcase() {
  const { t } = useLanguage();

  return (
    <section id="fleet" className="bg-[#09182d] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("fleetSection.eyebrow")}
          title={t("fleetSection.title")}
          description={t("fleetSection.description")}
        />

        <div className="grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {fleetItems.map((item, index) => {
            const wide = index === 0 || index === 4;
            const tall = index === 2;

            return (
              <motion.article
                key={item.titleKey}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] ${
                  wide ? "lg:col-span-2" : ""
                } ${tall ? "lg:row-span-2" : ""}`}
              >
                <img
                  src={item.image}
                  alt={t(`fleet.${item.titleKey}`)}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-anrra-dark/90 via-anrra-dark/15 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="mb-2 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-anrra-dark">
                    {t(`fleet.${item.labelKey}`)}
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    {t(`fleet.${item.titleKey}`)}
                  </h3>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FleetShowcase;