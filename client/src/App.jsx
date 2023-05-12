import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Feed from "./pages/Feed";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";
import Notifications from "./pages/Notifications";

import { useEffect, useState } from "react";
import Loader from "./pages/Loader";
import LandingPage from "./pages/LandingPage";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 7000);
  }, []);

  return (
    <div>
      {/* {loader ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route name="feed" path="/" element={<Feed />} />
            <Route name="my network" path="/mynetwork" element={<Network />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
      )} */}
      <LandingPage />
    </div>
  );
}

export default App;
