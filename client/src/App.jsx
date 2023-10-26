import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Feed from "./pages/Feed";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";
import Notifications from "./pages/Notifications";

import { useEffect, useState, useContext } from "react";
import { AppContextProvider, AppContext } from "./ContextProvider";
// // import { useNavigate } from "react-router-dom";
//
import Loader from "./pages/Loader";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import EditUser from "./pages/EditUser";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  // const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const user = localStorage.getItem("user");

  useEffect(() => {
    const fetchBackend = async () => {
      try {
        const response = await fetch(
          "https://linked-in-clone-backend.vercel.app/"
        );
        const data = await response.json();
        if ((data.success = true)) {
          setTimeout(() => setLoader(false), 2000);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBackend();
  }, []);

  const signinUser = async (param1, param2) => {
    // e.preventDefault();
    let email = param1;
    let password = param2;
    try {
      const response = await fetch(
        "https://linked-in-clone-backend.vercel.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppContextProvider>
      {loader ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route
              name="landing page"
              path="/"
              element={<LandingPage signinUser={signinUser} />}
            />
            <Route name="feed" path="/feed" element={<Feed />} />

            <Route name="my network" path="/mynetwork" element={<Network />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/edit-user" element={<EditUser />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/signin"
              element={<SignIn signinUser={signinUser} />}
            />
          </Routes>
        </Router>
      )}
    </AppContextProvider>
  );
}

export default App;
