import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/TopicList";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/1" element={<SingleArticle />}/>
        <Route path="/topics" element={<TopicList />} />
      </Routes>
    </div>
  );
}

export default App;
