import { CONTACT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-20">
      <AnimatePresence mode="wait">
        <motion.h1
          key={i18n.language}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          {t("contact.title")}
        </motion.h1>
      </AnimatePresence>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {t("contact.phone")}
        </motion.p>
        <p>{t("contact.email")}</p>
      </div>
    </div>
  );
};

export default Contact;
