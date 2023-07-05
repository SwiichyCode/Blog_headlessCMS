import { createClient } from "contentful";

const developpement = createClient({
  space: process.env.CONTENTFUL_SPACE_DEV as string,
  accessToken: process.env.CONTENTFUL_ACCESTOKEN_DEV as string,
});

const production = createClient({
  space: process.env.CONTENTFUL_SPACE_PROD as string,
  accessToken: process.env.CONTENTFUL_ACCESTOKEN_PROD as string,
});

const getLogo = async () => {
  const entries = await production.getEntries({
    content_type: "logo",
  });

  return entries.items;
};

// const getBlogPosts = async () => {
//   const entries = await currentClient.getEntries({ content_type: "blogPost" });
//   return entries.items;
// };

const getCarouselImages = async () => {
  const entries = await developpement
    .getEntries({ content_type: "imageCarousel" })
    .then((asset) => {
      return asset.items;
    });

  return entries;
};

const getCarouselVideos = async () => {
  const entries = await production
    .getEntries({ content_type: "carouselVideo" })
    .then((video) => {
      return video.items;
    });

  return entries;
};

// const getAuthorPresentation = async () => {
//   const entries = await currentClient.getEntries({
//     content_type: "authorPresentation",
//   });

//   return entries.items;
// };

const getSeasonVideo = async () => {
  const entries = await developpement
    .getEntries({
      content_type: "seasonPlayer",
    })
    .then((video) => {
      return video.items;
    });

  return entries;
};

const getEntries = {
  // getBlogPosts,
  getCarouselImages,
  getCarouselVideos,
  // getAuthorPresentation,
  getSeasonVideo,
  getLogo,
};

export default getEntries;
