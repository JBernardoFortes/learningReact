import Square from "./Square.tsx";
import { motion } from "motion/react";

const animation = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const squareVariants = {
  initial: { y: -5, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

interface Props {
  board: any[];
  handleClick: (i: number) => any;
}
const Board = ({ board, handleClick  }: Props) => {
  return (
    <motion.div
      variants={animation}
      initial={"initial"}
      animate={"animate"}
      className="board"
    >
      {board.map((square, index) => (
        <motion.div variants={squareVariants} className="square" key={index}>
          <Square
            value={square}
            key={index}
            handleClick={() => handleClick(index)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Board;
