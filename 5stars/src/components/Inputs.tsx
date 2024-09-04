interface Props {
  show: boolean;
  handleImage: () => void;
  handleText: () => void;
}
const Inputs = ({ show, handleImage, handleText }: Props) => {
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
  return (
    <section className="inputs">
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
          <label htmlFor="image" className="imageInput">
            {" "}
            Select file{" "}
          </label>
        )}
        {show && (
          <input
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
      </div>
    </section>
  );
};

export default Inputs;
