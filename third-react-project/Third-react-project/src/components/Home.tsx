// import { useEffect, useState } from "react";
import BlogList from "./BlogList.tsx";
import Loading from "./Loading.tsx";
import ErrorC from "./ErrorC.tsx";
import useFetch from "../useFetch.tsx";

const Home = () => {
  // const [blogs, setBlogs] = useState([
  //   { title: ``, body: ``, author: ``, id: 0 },
  // ]);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(false);

  // const handleDelete = (id: number) => {
  //   // Lembrar de retornar da funcao .filter quando usar {}
  //   const newBlogs = blogs.filter((blog) => {
  //     return blog.id !== id;
  //   });
  //   setBlogs(newBlogs);
  // };

  // useEffect(()=> {
  //   // Call this function everytime something is rendered in the Page
  //   // Every render !!
  //    Used in fetching data
  // })

  // useEffect(() => {}, []); // When adding [] at the end of useEffect, it grants that the function will be called only once,
  // On the first render
  // INSIDE THE [] YOU CAN PUT THE DEPENDECIES OF THE USEEFFECT
  // EXAMPLE

  // useEffect(() => {
  //   console.log(`NEw`);
  // }, [blogs]);

  // The function will only be called when the state of blogs change, REMEMBER, still run the function in the first render

  //Fetching data using useEffect

  // using hooks normally
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const blogsJson = await fetch(`http://localhost:8000/blogs`);
  //       if (!blogsJson.ok) {
  //         throw Error(`Error on fetching data from the server`);
  //       }
  //       const blogs = await blogsJson.json();
  //       setBlogs(blogs);
  //       setIsPending(false);
  //       setError(false);
  //     } catch {
  //       console.error(`ERROR ON FETCHING BLOGS`);
  //       setIsPending(false);
  //       setError(true);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // WHEN FETCHING DATA IS IMPORTANT TO REMEMBER TO NOT ASIGN A PROMISE ON THE UPDATE FUNCTION OF A USESTATE

  // Using custom hooks :

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs`);

  return (
    <div className="home">
      {isPending && !error && <Loading></Loading>}
      {!isPending && error && <ErrorC></ErrorC>}
      {!isPending && !error && (
        <BlogList
          title="All blogs"
          blogs={blogs}
          // handleDelete={handleDelete}
        ></BlogList>
      )}
    </div>
  );
};

export default Home;
