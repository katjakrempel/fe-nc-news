import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
