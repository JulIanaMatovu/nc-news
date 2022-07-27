import "./App.css";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Articles from "./Components/Articles";
import ArticleCard from "./Components/ArticleCard";
import TopicsPage from "./Components/TopicsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/:topic/articles" element={<Articles />}></Route>
          <Route path="/topics" element={<TopicsPage />}></Route>
          <Route path="/articles/:article_id" element={<ArticleCard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
