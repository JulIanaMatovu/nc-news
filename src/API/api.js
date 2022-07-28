import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-example-2.herokuapp.com/api",
});

export const fetchArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const fetchByTopic = (topic) => {
  return api.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
};

export const fetchSingleArticle= (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

export const updateVotes= (article_id) => {
  return api.patch(`/articles/${article_id}`,{inc_votes: 1} ).then(({ data }) => {
    return data.article;
  });
}


