import { motion } from "framer-motion";

function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left mx-0" : "text-center mx-auto";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7 }}
      className={`mb-12 max-w-3xl ${alignment}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-anrra-blue">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeader;