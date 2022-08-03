import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchSingleArticle } from "../API/api";
import { Link } from "react-router-dom";

export default function ArticleCard() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isErr, setIsErr] = useState(false);
  let image_url = "";

  useEffect(() => {
    fetchSingleArticle(article_id).then((data) => {
      setArticle(data);
    }).catch((err)=>{
      setIsErr(true);
    });
  }, [article_id]);

  function findCategory() {
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

  return (
    <>
    {isErr ? (
        <div className="errorArticle">
          <h2>Error: Article not found</h2>
        </div>
      ) : (
        <div className="articleList">
          <section>
      <div className="articleName">
        <p>{article.title}</p>
      </div>
    </section>
    <hr></hr>
    <img src={findCategory()} alt="" />
    <hr></hr>
    <article>{article.body}</article>
    <p>Author: {article.author}</p>
    <p>Date of publication: {article.created_at}</p>
    {article.topic !== undefined ? (<Link to={`/cooking/articles`}>Topic: {article.topic[0].toUpperCase() + article.topic.slice(1)}</Link>) :(
      <Link to={`/cooking/articles`}>Topic: {article.topic}</Link>
    ) } 
    <p>Votes: {article.votes}</p> <button>👍</button>
    <hr></hr>
    <strong><p>Comments:{article.comment_count}</p></strong>
    <section className="listedComments">
      <div >
        <p>View list of comments here:</p>
      </div>
    </section>
        <button>💬 Add a Comment</button>
        </div>
        
      )}
    
    
    </>
    
  );
}
