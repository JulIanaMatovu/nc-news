export default function ArticleCard({ article }) {
  //will be used for individual articles ticket
  let image_url = "";

  function findCategory() {
    switch (article.topic) {
      case "coding":
        image_url =
          "https://cdn.columbiauniversitybootcamp.com/wp-content/uploads/sites/108/2020/10/CDG_blog_post_image_02.jpg"
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
    <section>
      <div className="articleName">
        {findCategory()}
        
      </div>
    </section>
  );
}
