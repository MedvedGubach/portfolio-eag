import { Fragment, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const email = formData.get("user_email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const lastSent = localStorage.getItem("lastEmailSent");

    if (lastSent && Date.now() - lastSent < 7200000) { toast.warning(t("contact.toast-wait")); return; }
    localStorage.setItem("lastEmailSent", Date.now());

    if (formData.get("botboobytrap")) { console.warn("Intruder alert. Access Denied"); return; }

    if (!email || !subject || !message) {
      toast.error(t("contact.empty-fields"));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(t("contact.email-regex"));
      return;
    }

    const toastId = toast.loading(t("contact.sending-email"));
    setLoading(true);

    try {
      await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      toast.update(toastId, { render: t("contact.toast-send"), type: "success", isLoading: false, autoClose: 4000, });
      form.current.reset();

    } catch (error) {
      toast.update(toastId, { render: t("contact.toast-send-error"), type: "error", isLoading: false, autoClose: 4000, });
      console.error(error.text)
    } finally {
      setLoading(false);
    }
  }

  return (
    <Fragment>
      <ToastContainer position="top-center" theme="dark" />
      <section id="contact">
        <AnimatePresence mode="wait">
          <motion.h1
            key={i18n.language}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -25 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
            className="text-white my-10 text-center text-4xl"
          >
            {t("contact.title")}
          </motion.h1>
        </AnimatePresence>

        <div className="w-full max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 rounded-xl shadow-lg ring">
          <div className="flex flex-col justify-between">
            <div className="mt-10 space-y-6 text-gray-700">
              <div className="flex items-start gap-3 text-white">
                <FiMapPin className="mt-1" />
                <div>
                  <p>Guadalajara Jálisco, México</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <FiPhone />
                <span>+52 33-1041-9236</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <FiMail />
                <span>emmanuel.arana.gutierrez@gmail.com</span>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="text-white block text-sm font-medium mb-1">E-mail</label>
              <input aria-label="E-Mail" type="email" name="user_email" required className="w-full text-black border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label className="text-white block text-sm font-medium mb-1">{t("contact.label-subject")}</label>
              <input aria-label="Subject" type="text" name="subject" required className="w-full text-black border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <input aria-label="Botboobytrap" type="text" name="botboobytrap" className="hidden" autoComplete="off" />
            </div>
            <div>
              <label className="text-white block text-sm font-medium mb-1">{t("contact.label-message")}</label>
              <textarea aria-label="Message" name="message" rows="5" required className="w-full text-black border border-gray-300 p-2 rounded-md" />
            </div>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 
                ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-indigo-800"}`}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin h-5 w-5" />
                  {t("contact.button-sending")}
                </>
              ) : (
                t("contact.button-send")
              )}
            </motion.button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
