/* A "layout route" is a good place to put markup you want to
   share across all the pages on your site, like navigation. */
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      {/* An <Outlet> renders whatever child route is currently active. */}
      <Outlet />
    </div>
  );
};

export default Layout;
