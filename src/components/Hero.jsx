import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-anrra-dark px-5 pt-24"
    >
      <div className="absolute inset-0">
        <img
          src="/images/tren.jpg"
          alt="Anrra Centrum railway infrastructure"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-anrra-dark via-anrra-dark/85 to-anrra-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-anrra-dark via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 backdrop-blur"
          >
            {t("hero.badge")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex min-w-[180px] items-center justify-center gap-3 rounded-full bg-anrra-blue px-7 py-4 font-semibold text-white shadow-xl shadow-anrra-blue/20 transition hover:-translate-y-1 hover:bg-white hover:text-anrra-dark"
            >
              <span>{t("hero.primaryBtn")}</span>
              <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              {t("hero.secondaryBtn")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="hidden lg:block"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 h-72 overflow-hidden rounded-[1.6rem]">
                <img
                  src="/images/cement-flatting-truck.jpg"
                  alt="Road and urban infrastructure"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anrra-dark/90 via-anrra-dark/20 to-transparent" />

                <p className="absolute bottom-5 left-5 text-lg font-semibold text-white">
                  {t("hero.collageTop")}
                </p>
              </div>

              <div className="relative h-40 overflow-hidden rounded-[1.4rem]">
                <img
                  src="/images/kamiona.jpg"
                  alt="Heavy fleet"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anrra-dark/90 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                  {t("hero.collageBottomLeft")}
                </p>
              </div>

              <div className="relative h-40 overflow-hidden rounded-[1.4rem]">
                <img
                  src="/images/railway-vehicle.jpg"
                  alt="Railway works"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anrra-dark/90 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                  {t("hero.collageBottomRight")}
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-3xl border border-white/10 bg-anrra-blue/90 p-6 shadow-xl backdrop-blur">
              <p className="text-4xl font-black">20+</p>
              <p className="mt-1 text-sm text-white/80">
                {t("hero.experience")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;