import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/siteData";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-anrra-dark px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("projectsSection.eyebrow")}
          title={t("projectsSection.title")}
          description={t("projectsSection.description")}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(`projects.${project.key}.title`)}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-anrra-dark via-anrra-dark/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-anrra-dark">
                  {t(`categories.${project.categoryKey}`)}
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-2xl font-bold text-white">
                    {t(`projects.${project.key}.title`)}
                  </h3>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-white transition group-hover:bg-anrra-blue">
                    <FiArrowUpRight />
                  </span>
                </div>

                <p className="mt-4 leading-7 text-white/60">
                  {t(`projects.${project.key}.description`)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;