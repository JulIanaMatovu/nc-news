import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>NC News</h1>
      <div className="topicBoxes">
        <section id="cookingTopicBox">
          <strong>
            <Link to={`/cooking`}>Cooking</Link>
          </strong>
        </section>

        <section id="footballTopicBox">
          <strong>
            <Link to={`/football`}>Football</Link>
          </strong>
        </section>

        <section id="codingTopicBox">
          <strong>
            <Link to={`/coding`}>Coding</Link>
          </strong>
        </section>
      </div>
    </>
  );
}
