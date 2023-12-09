import React from "react";
import { useParams } from "react-router";
import Error from "../components/error";
import Loader from "../components/loading";
import { useGetShowDetailsQuery } from "../services/tvmaze";

const ShowDetail: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetShowDetailsQuery(
    parseInt(id ?? "0")
  );
  return (
    <div className="App">
      {error ? (
        <Error>Sorry...</Error>
      ) : isLoading ? (
        <Loader text="Loading..." />
      ) : (
        <div>
          <h1>{data?.name}</h1>
          <br />
          <img src={data?.image?.original} alt="" />
          <p>{data?.summary}</p>
          {data?.rating?.average}
        </div>
      )}
    </div>
  );
};

export default ShowDetail;
