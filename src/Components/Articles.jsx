import { useEffect, useState } from "react";
import { fetchArticles } from "../API/api";
import ArticleCard from "./ArticleCard";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let image_url = "";

  function findCategory(article) {
    switch (article.topic) {
      case "coding":
        image_url =
          "https://cdn.columbiauniversitybootcamp.com/wp-content/uploads/sites/108/2020/10/CDG_blog_post_image_02.jpg";
        break;

      case "cooking":
        image_url = "https://img.rasset.ie/001c1b9f-600.jpg";
        break;

      case "football":
        image_url =
          "https://www.thefa.com/-/media/thefacom-new/images/england/womens-senior/world-cup/england-v-norway/england-800-celeb-norway-smile.ashx?as=0&dmc=0&thn=0";
        break;

      default:
        image_url = "";
        break;
    }
    return image_url;
  }

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticleData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <div className="articleList">
        {articleData.map((article) => (
          <div className="articleName">
            <Link to={`/articles/${article.article_id}`}>
                <h6>{article.title}</h6>
            </Link>
            <Outlet />
            <p>Author: {article.author}</p>
              <p>Votes: {article.votes}</p>
              <p>Date: {article.created_at}</p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
}
