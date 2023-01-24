import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Search from "./pages/Search";
import Channel from "./pages/Channel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <div className="absolute left-0 righ-0 top-0 min-h-full min-w-full bg-zinc-900 overflow-x-hidden">
          <Navbar />
          <Sidebar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="video/:videoId" element={<Video />} />
            <Route path="search" element={<Search />} />
            <Route path="channel/:channelId" element={<Channel />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
};

export default App;