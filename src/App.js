import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";

import "./App.css";

//this works but needs to be in news.js and exported somehow to click event
async function fetchGolfNews() {
  const URL = `https://api.sportsdata.io/golf/v2/json/News?key=24c69ca6a3d246ef91da0ffe95be330a`;
  const response = await fetch(`${URL}`);
  const newsData = await response.json();
  console.log(newsData);
}

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/news"
            element={<News />}
            //thi onClick below doesnt work
            onClick={fetchGolfNews()}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
