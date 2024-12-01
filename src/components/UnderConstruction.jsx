import React, { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import { default as I1 } from "../assets/UnderConstruction/Illustration1.svg";
import { default as I2 } from "../assets/UnderConstruction/Illustration2.svg";
import { default as I3 } from "../assets/UnderConstruction/Illustration3.svg";
import { default as I4 } from "../assets/UnderConstruction/Illustration4.svg";

const Illustration = () => {
  const { t, i18n } = useTranslation();
  const SLOW = 44;
  const AVG = 33;
  const FAST = 22;

  const styles = {
    illustrationOuter: {
      position: "relative",
      display: "flex",
      margin: "auto",
      transform: "translateX(0)",
      width: "400px",
      height: "400px",
      overflow: "hidden",
    },

    illustrationInner: { position: "absolute" },

    i1: { left: "75px", top: "26px" },
    i2: { left: "68px", top: "-20px" },
    i3: { left: "50px", top: "72px" },
    i4: { left: "0px", top: "50px" },
  };

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        <motion.h1
          key={i18n.language}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          {t("constructon-text")}
        </motion.h1>
      </AnimatePresence>

      <div style={styles.illustrationOuter}>
        <motion.div
          style={{ ...styles.illustrationInner, ...styles.i4 }}
          animate={{
            y: SLOW,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img src={I4} />
        </motion.div>

        <motion.div
          style={{ ...styles.illustrationInner, ...styles.i3 }}
          animate={{
            y: SLOW,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img src={I3} />
        </motion.div>

        <motion.div
          style={{ ...styles.illustrationInner, ...styles.i2 }}
          animate={{
            y: AVG,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img src={I2} />
        </motion.div>

        <motion.div
          style={{ ...styles.illustrationInner, ...styles.i1 }}
          animate={{
            y: FAST,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img src={I1} />
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Illustration;
