import { motion } from "framer-motion";

interface Props {
  show: boolean;
  handleImage: () => void;
  handleText: () => void;
  handleAuthor: () => void;
  handleHide: () => void;
}

const Inputs = ({
  show,
  handleImage,
  handleText,
  handleAuthor,
  handleHide,
}: Props) => {
  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };
  // let [image, setImage] = useState("");
  // let [title, setTitle] = useState("");

  // useEffect(()=> {

  //   const thief = new ColorThief();
  //   const body = [...document.getElementsByTagName("body")][0];
  //   const outputText = document.getElementById("outputText");
  //   let palette = thief.getPalette(document.getElementById("outputImage"));
  //   let colors = [];
  //   let colorsA = [];

  //   palette.forEach((color, i) => {
  //     if (color[0] > 110 && i < 5) {
  //       return;
  //     }

  //     colors.push(color.join(","));
  //     colorsA.push(color);
  //   });
  //   if (colorsA[0][0] > 110 && colorsA[1][0] > 110) {
  //     outputText.style.color = "var(--black)";
  //   } else {
  //     outputText.style.color = "var(--white)";
  //   }
  //   body.style.backgroundImage = `linear-gradient(to bottom, rgb(${colors[0]}),rgb(${colors[1]}))`;

  // }, [image])
  const handleImageTrigger = () => {
    // const inputFiles = document.getElementById("image");
    // const image = inputFiles.files[0];
    // setImage(URL.createObjectURL(image));
    handleImage();
  };
  const handleTextTrigger = () => {
    // const text = document.getElementById("title").value;
    // setTitle(text);
    handleText();
  };
  const handleAuthorTrigger = () => {
    handleAuthor();
  };
  const handleHideTrigger = () => {
    handleHide();
  };
  return (
    show && (
      <motion.section
        className="inputs"
        variants={animation}
        initial={animation.initial}
        animate={animation.animate}
      >
        {/* {<img src={image} className="imageOutput"></img>}
      {<h1 className="textOutput"> {title}</h1>} */}

        <div className="inputWrap">
          <input
            type="file"
            id="image"
            name="image"
            onChange={() => {
              handleImageTrigger();
            }}
          ></input>

          {show && (
            <motion.input
              variants={animation}
              initial={animation.initial}
              animate={animation.animate}
              type="text"
              name=""
              id="title"
              onChange={() => {
                handleTextTrigger();
              }}
              className="textInput"
              placeholder="Enter the title"
            />
          )}
          {show && (
            <motion.input
              variants={animation}
              initial={animation.initial}
              animate={animation.animate}
              type="text"
              name=""
              id="author"
              onChange={() => {
                handleAuthorTrigger();
              }}
              className="textInput"
              placeholder="Enter the author"
            />
          )}
          {show && (
            <motion.label
              variants={animation}
              initial={animation.initial}
              animate={animation.animate}
              htmlFor="image"
              className="imageInput"
            >
              {" "}
              Select file{" "}
            </motion.label>
          )}
          {show && (
            <motion.button
              variants={animation}
              initial={animation.initial}
              animate={animation.animate}
              onClick={() => {
                handleHideTrigger();
              }}
              className="btn"
              id="hide"
            >
              X
            </motion.button>
          )}
        </div>
      </motion.section>
    )
  );
};

export default Inputs;
