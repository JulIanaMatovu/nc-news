import { useEffect, useState } from "react";
import { fetchArticles } from "../API/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    fetchArticles().then((data) => {
      setArticleData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Articles</h1>

      {isLoading ? (
        <div className="loadingMsg">
          <h2>Loading Articles...</h2>
        </div>
      ) : (
        <div className="articleList">
          {articleData.map((article) => (
            <div className="articleName" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h6>{article.title}</h6>
              </Link>
              <p>Author: {article.author}</p>
              <p>Votes: {article.votes}</p>
              <p>Date: {article.created_at}</p>
              <hr></hr>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
