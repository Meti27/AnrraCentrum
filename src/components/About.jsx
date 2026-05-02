import { motion } from "framer-motion";
import { stats } from "../data/siteData";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#09182d] px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75 }}
          className="relative grid gap-5"
        >
          <img
            src="/images/kamiona.jpg"
            alt="Anrra Centrum truck fleet"
            className="h-[420px] w-full rounded-[2rem] object-cover"
          />

          <div className="grid grid-cols-2 gap-5">
            <img
              src="/images/traktor.jpg"
              alt="Anrra Centrum loader"
              className="h-52 w-full rounded-[2rem] object-cover"
            />

            <img
              src="/images/crane.jpg"
              alt="Anrra Centrum crane transport"
              className="h-52 w-full rounded-[2rem] object-cover"
            />
          </div>

          <div className="absolute left-6 top-6 rounded-3xl border border-white/10 bg-anrra-dark/75 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-anrra-blue">
              {t("aboutSection.founded")}
            </p>
            <p className="mt-2 text-2xl font-bold">{t("aboutSection.location")}</p>
          </div>
        </motion.div>

        <div>
          <SectionHeader
            eyebrow={t("aboutSection.eyebrow")}
            title={t("aboutSection.title")}
            align="left"
          />

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-lg leading-8 text-white/70"
          >
            <p>{t("aboutSection.p1")}</p>
            <p>{t("aboutSection.p2")}</p>
            <p>{t("aboutSection.p3")}</p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.labelKey}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-3xl font-black text-white">{item.value}</p>
                <p className="mt-2 text-sm text-white/55">
                  {t(`stats.${item.labelKey}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;