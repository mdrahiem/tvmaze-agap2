/* A "layout route" is a good place to put markup you want to
   share across all the pages on your site, like navigation. */
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
// import bg from "../assets/bg1.jpeg";
// import bg from "../assets/bg.jpg";

function Layout() {
  return (
    <LayoutContainer>
      <LayoutInner>
        {/* An <Outlet> renders whatever child route is currently active. */}
        <Outlet />
      </LayoutInner>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div({
  minHeight: "100vh",
  // backgroundImage: `url(${bg})`,
  background: "linear-gradient(90deg, #02aab0 0%, #00cdac 100%)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  margin: "0 auto",
  padding: 0,
  fontFamily: "'Open Sans', sans-serif",
});

const LayoutInner = styled.div({
  maxWidth: "980px",
  margin: "0 auto",
  padding: "2rem",
});

export default Layout;
