import React from "react";
import { useGetShowsListQuery } from "../services/tvmaze";

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetShowsListQuery("powerpuff girls");
  console.log(data);
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data && data.length > 0 ? (
        <>
          <h3>{data[0]?.show?.id}</h3>
          <img src={data[0]?.show?.image?.original} alt={data[0]?.show?.name} />
        </>
      ) : null}
    </div>
  );
};

export default Home;
