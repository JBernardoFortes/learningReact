import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const Error = () => {
  return (
    <motion.div variants={animation} initial = {animation.initial} animate={animation.animate} className="errorC">
      <img src="../public/folder.png" alt="Error" className="errorImg" />
      <h2> An error has ocurred</h2>
    </motion.div>
  );
};

export default Error;
