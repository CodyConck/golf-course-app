import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import MyAccount from "./pages/MyAccount";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/myaccount" element={<MyAccount />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
