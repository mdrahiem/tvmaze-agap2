import React from "react";
import { useParams } from "react-router";

const ShowDetail: React.FC = () => {
  // fetch id from the params
  // fetch show details from the API
  const { id } = useParams();
  return (
    <div>
      Show details page {id}
      {/* <h2>{showInfo.title}</h2>
      <p>{showInfo.description}</p>
      <p>Rating: {showInfo.rating}</p>
      <p>Genres: {showInfo.genres.join(", ")}</p> */}
    </div>
  );
};

export default ShowDetail;
