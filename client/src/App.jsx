import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Feed from "./pages/Feed";
import Network from "./pages/Network";

function App() {
  return (
    <Router>
      <Routes>
        <Route name="feed" path="/" element={<Feed />} />
        <Route name="my network" path="/mynetwork" element={<Network />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
