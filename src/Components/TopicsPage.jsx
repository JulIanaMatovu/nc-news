import { Link } from "react-router-dom";

export default function Topics(){
    return (
        <>
        <h1>Topics</h1>
      <div className="topics">
        <section id="cookingTopicChoice">
          <strong>
            <Link to={`/cooking/articles`}>Cooking</Link>
          </strong>
        </section>

        <section id="footballTopicChoice">
          <strong>
            <Link to={`/football/articles`}>Football</Link>
          </strong>
        </section>

        <section id="codingTopicChoice">
          <strong>
            <Link to={`/coding/articles`}>Coding</Link>
          </strong>
        </section>
      </div>
    </>
    )
}