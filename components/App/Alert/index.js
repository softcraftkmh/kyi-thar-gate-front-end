import { motion } from "framer-motion";
import "./styles.scss";

const index = ({ type, message }) => {
  return (
    <motion.div
      animate={{
        rotate: [0, 0, -3, 3, 0, 0],
        opacity: 1
      }}
      transition={{ duration: 0.5, loop: Infinity }}
      className={type === "INFO" ? "alert--info" : "alert--error"}
    >
      {message}
    </motion.div>
  );
};

export default index;
