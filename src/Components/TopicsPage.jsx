import { Link } from "react-router-dom";

export default function Topics(){
    return (
        <>
        <h1>Topics</h1>
      <div className="topics">
        <section id="cookingTopicChoice">
          <strong>
            <Link to={`/articles/cooking`}>Cooking</Link>
          </strong>
        </section>

        <section id="footballTopicChoice">
          <strong>
            <Link to={`/articles/football`}>Football</Link>
          </strong>
        </section>

        <section id="codingTopicChoice">
          <strong>
            <Link to={`/articles/coding`}>Coding</Link>
          </strong>
        </section>
      </div>
    </>
    )
}