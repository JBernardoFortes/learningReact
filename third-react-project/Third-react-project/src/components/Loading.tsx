import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const Loading = () => {
  return (
    <motion.div
      variants={animation}
      initial={animation.initial}
      animate={animation.animate}
      className="loadingOuter"
    >
      <div className="loading">
        <div className="bar" id="bar01"></div>
        <div className="bar" id="bar02"></div>
        <div className="bar" id="bar03"></div>
        <div className="bar" id="bar04"></div>
        <div className="bar" id="bar05"></div>
        <div className="bar" id="bar06"></div>
      </div>
      <h2 className="loadingWord">Loading</h2>
    </motion.div>
  );
};

export default Loading;
