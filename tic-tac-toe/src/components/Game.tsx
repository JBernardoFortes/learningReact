import { useEffect, useState } from "react";
import Board from "./Board.tsx";
import { motion } from "motion/react";

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
const Game = () => {
  const calculateWinner = (board: any | string[]) => {
    const possibleWinners = [
      [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (let i = 0; i < possibleWinners.length; i++) {
      const [a, b, c] = possibleWinners[i];
      if (board[a] && board[a] == board[b] && board[a] == board[c]) {
        // Passa pelos indices dos possiveis ganhadores no board ^^
        return board[a]; // retorna o valor que venceu (X ou O)
      }
    }
    return null;
  };
  const feedBack = (board: any[], winner: any) => {
    if (winner) {
      return `Winner : ${winner}`;
    } else if (board.includes(null)) {
      return `Current turn : ${xTurn ? "X" : "O"}`;
    } else {
      return "No winner";
    }
  };

  const [feedback, setFeedback] = useState("");

  const [board, setBoard] = useState(Array(9).fill(null)); // passar esse cara como props do Board

  const [xTurn, setXTurn] = useState(true); // manter o track dos turnos

  const winner = calculateWinner(board); // toda vez que atualizar o valor do board vai ser calculado de novo o vencedor ^^
  // Calcular winner
  useEffect(() => {
    setFeedback(feedBack(board, winner));
  }, [board]);
  const [isGoing, setIsGoing] = useState(0);
  const handleClick = (i: number) => {
    // O i eh o indice do quadrado que foi clicado
    // Verificar se ja tem um ganhador ou se o quadrado ja esta preenchido
    const tempBoard = [...board];
    if (!!winner) {
      setIsGoing(0);
      return;
    } else if (!!tempBoard[i]) {
      return;
    }
    // if (!!winner || !!tempBoard[i]) {
    //   return;
    // } // verifica se ja tem um vencedor ou se o quadrado ja esta preenchido
    tempBoard[i] = xTurn ? "X" : "O"; // atribui o valor no square de acordo com o turno
    setBoard(tempBoard); // atualiza o board
    setXTurn(!xTurn); // Muda o turno para o proximo
    setIsGoing(1);
  };
  const resetBoard = () => {
    return (
      <button
        className="button"
        onClick={() => {
          setBoard(Array(9).fill(null));
          setIsGoing(0);
        }}
      >
        {" "}
        <motion.span
          variants={animation}
          initial="initial"
          animate="animate"
          key={isGoing}
        >
          {isGoing == 1 ? "Reset" : "Start"}
        </motion.span>
      </button>
    );
  };

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      className="game"
    >
      {" "}
      <h2 className="text">
        <span>Tic Tac Toe</span>
      </h2>
      <p className="text">
        <motion.span
          className="feedback"
          initial={animation.initial}
          animate={animation.animate}
          key={feedback}
        >
          {feedback}
        </motion.span>
      </p>
      <Board board={board} handleClick={handleClick} />
      {resetBoard()}
    </motion.div>
  );
};

export default Game;
