import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Error from "../components/error";
import Loader from "../components/loading";
import {
  useGetShowDetailsQuery,
  useGetShowEpisodesQuery,
} from "../services/tvmaze";

const ShowDetails: React.FC = () => {
  const { showId } = useParams();
  const {
    data: showData,
    error: showDetailsError,
    isLoading: showDetailsLoading,
  } = useGetShowDetailsQuery(parseInt(showId ?? "0"));
  const {
    data: showEpisodesData,
    error: showEpisodesError,
    isLoading: showEpisodesLoading,
  } = useGetShowEpisodesQuery(parseInt(showId ?? "0"));
  return (
    <div className="App">
      {showDetailsError || showEpisodesError ? (
        <Error>Sorry...</Error>
      ) : showDetailsLoading || showEpisodesLoading ? (
        <Loader text="Loading..." />
      ) : (
        <div>
          <h1>{showData?.name}</h1>
          <br />
          <img src={showData?.image?.original} alt="" />
          <p>{showData?.summary}</p>
          {showData?.rating?.average}
          {showEpisodesData?.map((episode) => (
            <Link to={`/${showId}/episode/${episode.id}`} key={episode.id}>
              <h3>{episode.name}</h3>
              <img src={episode?.image?.original} alt="" />
              <p>{episode.summary}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
