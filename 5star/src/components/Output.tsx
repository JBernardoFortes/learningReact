import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: any;
  title: string;
  handleBG: () => void;
  author: string;
}
const Output = ({ image, title, handleBG, author }: Props) => {
  let [imageSt, setImage] = useState("");
  let [titleSt, setTitle] = useState("");
  let [authorSt, setAuthor] = useState("");

  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    setImage(image);
    setTitle(title);
    setAuthor(author);
  }, [image, title, author]);
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
      {<h1 className="textOutput2"> {authorSt}</h1>}
    </div>
  );
};

export default Output;
