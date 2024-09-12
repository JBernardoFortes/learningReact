import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: any;
  title: string;
  handleBG: () => void;
}
const Output = ({ image, title, handleBG }: Props) => {
  let [imageSt, setImage] = useState("");
  let [titleSt, setTitle] = useState("");

  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    setImage(image);
    setTitle(title);
  }, [image, title]);
  return (
    <div className="outputs">
      {
        <motion.img
          src={imageSt}
          className="imageOutput"
          id="dataImage"
          onLoad={() => {
            handleBG();
          }}
          variants={animation}
          initial={animation.initial}
          animate={animation.animate}
        ></motion.img>
      }
      {<h1 className="textOutput"> {titleSt}</h1>}
    </div>
  );
};

export default Output;
