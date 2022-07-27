import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>NC News</h1>
      <div className="topicBoxes">
        <section id="cookingTopicBox">
          <strong>
            <Link to={`/cooking/articles`}>Cooking</Link>
          </strong>
        </section>

        <section id="footballTopicBox">
          <strong>
            <Link to={`/football/articles`}>Football</Link>
          </strong>
        </section>

        <section id="codingTopicBox">
          <strong>
            <Link to={`/coding/articles`}>Coding</Link>
          </strong>
        </section>
      </div>
    </>
  );
}
