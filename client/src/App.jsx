import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Feed from "./pages/Feed";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";
import Notifications from "./pages/Notifications";

import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
//
import Loader from "./pages/Loader";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  // const navigate = useNavigate();

  const [loader, setLoader] = useState(true);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoader(false), 3000);
  }, []);

  const signinUser = async (param1, param2) => {
    // e.preventDefault();
    let email = param1;
    let password = param2;
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {}
  };
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
            <Route
              path="/signin"
              element={<SignIn signinUser={signinUser} />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
