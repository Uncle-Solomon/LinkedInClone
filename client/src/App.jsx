import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Feed from "./pages/Feed";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";
import Notifications from "./pages/Notifications";

import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import Loader from "./pages/Loader";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  // const navigate = useNavigate();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 3000);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState("");

  const [err, setErr] = useState("");

  const signinUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://linked-in-clone-backend.onrender.com/login",
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
      console.log(data);

      if (data.errors) {
        console.log(data.errors);
        const errorString = JSON.stringify(data.errors);
        setErr(errorString);
      }
      if (data.success === true) {
        // navigate("/feed");
        console.log("Working");
        setUserData(JSON.stringify(data.message));
      }
    } catch (error) {
      alert(
        "There is an issue with communicatng with the backend, please give it some time :)"
      );
    }
  };

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route name="landing page" path="/" element={<LandingPage />} />
            <Route
              name="feed"
              path="/feed"
              element={<Feed userData={userData} />}
            />
            <Route name="my network" path="/mynetwork" element={<Network />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/signin"
              element={
                <SignIn
                  signinUser={signinUser}
                  password={password}
                  setPassword={setPassword}
                  email={email}
                  setEmail={setEmail}
                  err={err}
                  setErr={setErr}
                  userData={userData}
                />
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
