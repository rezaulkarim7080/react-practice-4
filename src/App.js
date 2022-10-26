import logo from "./logo.svg";
import { Button } from "@mui/material";
import News from "./components/News";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2af719784404485daa0b742586f78b8e";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Headlines : {articles.length}</h1>
      {articles.map((article) => (
        <News article={article} />
      ))}
    </div>
  );
}

export default App;
