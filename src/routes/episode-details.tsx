import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Error from "../components/error";
import Loader from "../components/loading";
import { useGetEpisodeDetailsQuery } from "../services/tvmaze";

const EpisodeDetails: React.FC = () => {
  const { episodeId, showId } = useParams();
  console.log(episodeId, "episodeId", showId, "showId");
  const {
    data: episodeData,
    error: episodeDetailsError,
    isLoading: episodeDetailsLoading,
  } = useGetEpisodeDetailsQuery(parseInt(episodeId ?? "0"));

  console.log(episodeData, "episodeData");
  return (
    <div>
      {episodeDetailsError ? (
        <Error>Sorry...</Error>
      ) : episodeDetailsLoading ? (
        <Loader text="Loading..." />
      ) : (
        <div>
          <Link to={`/show/${showId}`}>Back to show</Link>
          <h1>{episodeData?.name}</h1>
          <img src={episodeData?.image?.original} alt="" />
          <p>{episodeData?.summary}</p>
        </div>
      )}
    </div>
  );
};

export default EpisodeDetails;
