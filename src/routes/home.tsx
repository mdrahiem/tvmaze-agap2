import React from "react";
import { Link } from "react-router-dom";
import Error from "../components/error";
import Loader from "../components/loading";
import { useGetShowsListQuery } from "../services/tvmaze";

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetShowsListQuery("powerpuff girls");
  return (
    <div className="App">
      {error ? (
        <Error>Sorry...</Error>
      ) : isLoading ? (
        <Loader text="Loading..." />
      ) : data && data.length > 0 ? (
        data.map((item) => (
          <Link to={`/show/${item?.show?.id}`} preventScrollReset>
            <h3>{item?.show?.id}</h3>
            <img src={item?.show?.image?.original} alt={item?.show?.name} />
          </Link>
        ))
      ) : null}
    </div>
  );
};

export default Home;
