import logo from "./logo.svg";
import { Button } from "@mui/material";
import News from "./components/News";
import "./App.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Router, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Chart from "./components/Chart";
import axios from "axios";

/////////NEWS REPORT /////
// function App() {
//   const [articles, setArticles] = useState([]);
//   useEffect(() => {
//     const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2af719784404485daa0b742586f78b8e";

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setArticles(data.articles));
//   }, []);

//   return (
//     <div className="App">
//       <h1 style={{ textAlign: "center" }}>Headlines : {articles.length}</h1>
//       {articles.map((article) => (
//         <News article={article} />
//       ))}
//     </div>
//   );
// }

//////////   Recharts   ///////////

// function App() {
//   return (
//     <div className="App">
//       <Chart />
//     </div>
//   );
// }

///////  Axios ////

// function App() {
//   const [articles, setArticles] = useState([]);
//   useEffect(() => {
//     const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2af719784404485daa0b742586f78b8e";

//     axios(url).then((data) => setArticles(data.articles));
//   }, []);
//   return <div className="App">
//   </div>;
// }

//////   Router  /////

function App() {
  return (
    <div className="App">
      <h1>React App </h1>
      <Router>
        <switch>
          <Route path="/Chart">
            <Chart></Chart>
          </Route>
          <Route path="/News">
            <News></News>
          </Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
