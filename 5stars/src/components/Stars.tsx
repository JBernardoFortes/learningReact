import { useState } from "react";

const Stars = () => {
  const stars = [0, 1, 2, 3, 4];
  let [active, setActive] = useState(-1);
  let [hover, setHover] = useState(-1);
  // let [prevAc, setPrevAc] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHover(index);
    // setPrevAc(active);
    // setActive(-1);s
  };
  const handleMouseLeave = () => {
    setHover(-1);
    // setActive(prevAc);s
  };
  const handleClick = (index: number) => {
    if (active == index) {
      setActive(-1);
      // setPrevAc(-1);
    } else {
      setActive(index);
      // setPrevAc(index);
    }
  };
  return (
    <div className = 'stars'> 
      {/* {stars.map((starNumber) => {
        // if (starNumber <= active || starNumber <= hover) {
        //   return (
        //     <img
        //       src="../../public/star.png"
        //       className="star active"
        //       onMouseEnter={() => handleMouseEnter(starNumber)}
        //       onClick={() => handleClick(starNumber)}
        //       onMouseLeave={() => {
        //         handleMouseLeave();
        //       }}
        //       key={starNumber}
        //     />
        //   );
        // } else {
        //   return (
        //     <img
        //       src="../../public/star.png"
        //       className="star desactive"
        //       onMouseEnter={() => handleMouseEnter(starNumber)}
        //       onClick={() => handleClick(starNumber)}
        //       onMouseLeave={() => handleMouseLeave()}
        //       key={starNumber}
        //     ></img>
        //   );
        // }
       return  <img src="../../public/star.png" className={`star ${starNumber <= (hover !== -1 ? hover : active) ? 'active' : 'desactive'}`}
      })}
       */}
      {stars.map((starNumber) => (
        <img
          src="../../public/star.png"
          className={`star ${
            starNumber <= (hover !== -1 ? hover : active)
              ? "active"
              : "desactive"
          }`}
          onMouseEnter={() => handleMouseEnter(starNumber)}
          onClick={() => handleClick(starNumber)}
          onMouseLeave={handleMouseLeave}
          key={starNumber}
        />
      ))}
    </div>
  );
};

export default Stars;
