import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Feed from "./pages/Feed";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";
import Notifications from "./pages/Notifications";

import { useEffect, useState } from "react";
import Loader from "./pages/Loader";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 6000);
  }, []);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route name="landing page" path="/" element={<LandingPage />} />
            <Route name="feed" path="/feed" element={<Feed />} />
            <Route name="my network" path="/mynetwork" element={<Network />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
