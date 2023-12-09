import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      Home page
      <Link to="/show-details/2">Show details</Link>
    </div>
  );
};

export default Home;
