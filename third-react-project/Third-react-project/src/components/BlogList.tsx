import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  blogs: { title: string; body: string; author: string; id: number }[];
  // handleDelete: (id: number) => void;
}

const animation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const BlogList = (props: Props) => {
  return (
    <motion.div
      variants={animation}
      initial={animation.initial}
      animate={animation.animate}
    >
      <h1>{props.title}</h1>
      {props.blogs.map((e) => (
          <Link to={`/blogs/${e.id}`} key={e.id}>
        <div className="blogPreview" key={e.id}>

            <h1>{e.title}</h1>
            <p>
              Written by: <strong>{e.author}</strong>
            </p>
          {/* <button className="btn"
            onClick={() => {
              props.handleDelete(e.id);
              }}
              >
              {" "}
              Delete Blog
              </button> */}
        </div>
              </Link>
      ))}
    </motion.div>
  );
};

export default BlogList;
