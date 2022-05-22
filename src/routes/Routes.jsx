import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {
  HomePage,
  InvalidPage,
  LoginPage,
  SignupPage,
  HistoryPage,
  ExplorePage,
  LikedPage,
  WatchLaterPage
} from "pages";
import PrivateRoutes from "./PrivateRoutes";
import RedirectPage from "./RedirectPage";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<InvalidPage />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route element={<RedirectPage />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
      <Route path="/explore" element={<ExplorePage />} />
      {/* <Route path="/watch/:id" element={<Watch />} /> */}
      <Route element={<PrivateRoutes />}>
        <Route path="/history" element={<HistoryPage />} />
        {/* <Route path="/playlists" element={<PlaylistsPage />} />*/}
        <Route path="/watch-later" element={<WatchLaterPage />} />
        <Route path="/liked-videos" element={<LikedPage />} /> 
      </Route>
    </Routes>
  );
};

export default SiteRoutes;
