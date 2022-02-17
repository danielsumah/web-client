import { requestInstance } from "./config";

export const getArticles = async () => {
  try {
    const url =
      "/articles?filters[status][$eq]=true&populate=%2A&asc&sort[0]=id%3Adesc&?pagination[page]=1&pagination[pageSize]=10";
    const response = await requestInstance.get(url);
    if (response.data) {
      let articles = null;
      const {data} = response.data;
      if (data && data.length > 0){
        articles = data;
      }
      return articles
    }
    return null;
  } catch (error) {
    return new Error("An error occured");
  }
};

export const getArticle = async (slug) => {
  try {
    const response = await requestInstance.get(
      `/articles?filters[slug][$eq]=${slug}&populate=%2A`
    );
    return response.data;
  } catch {
    return new Error("An error occurred");
  }
};

export const getAllArticles = async () => {
  try {
    const url =
      "/articles";
    const response = await requestInstance.get(url);
    if (response.data) {
      let articles = null;
      const {data} = response.data;
      if (data && data.length > 0){
        articles = data;
      }
      return articles
    }
    return null;
  } catch (error) {
    return new Error("An error occured");
  }
};
