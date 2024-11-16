import { motion } from "motion/react";

const animation = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};
interface Props {
  value: any;
  handleClick: (i: number) => void;
}
const Square = ({ value, handleClick }: Props) => {
  return (
    <motion.span
      variants={animation}
      initial="initial"
      animate="animate"
      className="insideSquare"
      onClick={
        handleClick as unknown as React.MouseEventHandler<HTMLDivElement>
      }
    >
      {value}
    </motion.span>
  );
};
// esse as unknown as React.MouseEventHandler<HTMLDivElement> Foi usado para o typeSCRIPT ignorar o erro
export default Square;
