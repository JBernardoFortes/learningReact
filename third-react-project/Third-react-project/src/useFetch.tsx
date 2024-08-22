import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  // OS STATES SAO DENTRO DA FUNCAO
  // Much more reusable

  const [data, setData] = useState([
    { title: ``, body: ``, author: ``, id: 0 },
  ]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const dataJson = await fetch(`${url}`);
          if (!dataJson.ok) {
            throw Error(`Error on fetching data from the server`);
          }
          const data = await dataJson.json();
          setData(data);
          setIsPending(false);
          setError(false);
        } catch {
          console.error(`ERROR ON FETCHING data`);
          setIsPending(false);
          setError(true);
        }
      };

      fetchData();
    }, 500);
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
