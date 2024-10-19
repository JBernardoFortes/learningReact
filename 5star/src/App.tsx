import Stars from "./components/Stars.tsx";
import Inputs from "./components/Inputs.tsx";
import Output from "./components/Output.tsx";
import "./assets/styles/styles.css";
import { useState } from "react";
import ColorThief from "../node_modules/colorthief/dist/color-thief.mjs";
import { motion } from "framer-motion";

function App() {
  let [hide, setHide] = useState(true);
  let [image, setImage] = useState("");
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");

  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };

  const handleHide = () => {
    setHide(!hide);
  };
  const handleImage = () => {
    const inputFiles = document.getElementById("image") as HTMLInputElement;
    const image = inputFiles!.files[0] || null;

    try {
      setImage(URL.createObjectURL(image));
    } catch (e) {
      window.alert(`Insira uma imagem valida`);
      return;
    }
  };
  const handleText = () => {
    const text = document.getElementById("title").value;
    setTitle(text);
  };
  const handleAuthor = () => {
    const author = document.getElementById("author").value;
    setAuthor(author);
  };

  const changeBG = () => {
    const thief = new ColorThief();
    const body = [...document.getElementsByTagName("body")][0];
    const outputText = [...document.getElementsByClassName(`textOutput`)][0];
    let palette = thief.getPalette(document.getElementById("dataImage"));
    let colors = [];
    let colorsA = [];
    palette.forEach((color, i) => {
      if (color[0] > 110 && i < 5) {
        return;
      }

      colors.push(color.join(","));
      colorsA.push(color);
    });
    if (colorsA[0][0] > 110 && colorsA[1][0] > 110) {
      outputText.styles.color = "var(--black)";
    } else {
      outputText.style.color = "var(--white)";
    }
    body.style.backgroundImage = `linear-gradient(to bottom, rgb(${colors[0]}),rgb(${colors[1]}))`;
    // body.style.backgroundColor = `rgb(${colors[0]})`
  };

  return (
    <>
      <div className="compWrap">
        <Output
          image={image}
          title={title}
          handleBG={changeBG}
          author={author}
        />
        <Stars />
        <Inputs
          show={hide}
          handleImage={handleImage}
          handleText={handleText}
          handleAuthor={handleAuthor}
          handleHide={handleHide}
        ></Inputs>
      </div>
      {!hide && (
        <motion.button
          variants={animation}
          initial={animation.initial}
          animate={animation.animate}
          onClick={() => {
            handleHide();
          }}
          className="btn"
          id="showOptions"
        >
          X{" "}
        </motion.button>
      )}
    </>
  );
}

export default App;
