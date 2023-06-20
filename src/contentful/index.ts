import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  accessToken: process.env.CONTENTFUL_ACCESTOKEN as string,
});

const getBlogPosts = async () => {
  const entries = await client.getEntries({ content_type: "blogPost" });
  return entries.items;
};

const getCarouselImages = async () => {
  const entries = await client
    .getEntries({ content_type: "imageCarousel" })
    .then((asset) => {
      return asset.items;
    });

  return entries;
};

const getAuthorPresentation = async () => {
  const entries = await client.getEntries({
    content_type: "authorPresentation",
  });

  return entries.items;
};

const getSeasonVideo = async () => {
  const entries = await client
    .getEntries({
      content_type: "seasonPlayer",
    })
    .then((video) => {
      return video.items;
    });

  return entries;
};

const getEntries = {
  getBlogPosts,
  getCarouselImages,
  getAuthorPresentation,
  getSeasonVideo,
};

export default getEntries;
