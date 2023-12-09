import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import Layout from "./components/layout";
import NoMatch from "./components/no-match";
import EpisodesList from "./routes/episode-list";
import Home from "./routes/home";
import ShowDetail from "./routes/show-detail";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="show-details/:id" element={<ShowDetail />}>
            <Route path="episodes" element={<EpisodesList />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
