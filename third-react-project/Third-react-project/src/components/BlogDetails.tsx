import ErrorC from "./ErrorC";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };
  const { id } = useParams(); // retorna um objeto, tem que dar destructure
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const navigate = useNavigate();
  const handleDelete = async () => {
    await fetch("http://localhost:8000/blogs/" + blog.id, { method: "DELETE" });
    navigate("/");
  };

  return (
    <div className="blogDetailsC">
      {isPending && <Loading />}
      {error && !isPending && <ErrorC />}
      {!isPending && (
        <motion.article
          className="blogDetailsArt"
          variants={animation}
          initial={animation.initial}
          animate={animation.animate}
        >
          <h1>{blog.title}</h1>
          <h3> {blog.author}</h3>
          <p> {blog.body}</p>
        </motion.article>
      )}
      {!isPending && (
        <motion.button
          className="btn"
          variants={animation}
          initial={animation.initial}
          animate={animation.animate}
          onClick={handleDelete}
        >
          {" "}
          Delete{" "}
        </motion.button>
      )}
    </div>
  );
};

export default BlogDetails;
