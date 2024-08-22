import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const animation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState(``);
  const [author, setAuthor] = useState(``);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    await fetch(`http://localhost:8000/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    navigate('/')
    setIsPending(false);
  };

  return (
    <motion.div
      variants={animation}
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      className="createC"
    >
      <h2 className="createTitle"> Create a new blog</h2>
      <form onSubmit={handleSubmit} className="createForm">
        <label> Blog title:</label>
        <input
          className="createBTitle"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <label> Blog body:</label>
        <textarea
          className="createBBody"
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label> Blog author:</label>
        <input
          className="createBAuthor"
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        ></input>
        {!isPending && <button className="btn"> Submit</button>}
        {isPending && (
          <button className="btn" disabled>
            Adding blog...
          </button>
        )}
      </form>
    </motion.div>
  );
};

export default Create;
