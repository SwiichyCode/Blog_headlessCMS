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

const getCarouselVideos = async () => {
  const entries = await production
    .getEntries({ content_type: "carouselVideo" })
    .then((video) => {
      return video.items;
    });

  return entries;
};

const getEntries = {
  getCarouselVideos,
  getLogo,
};

export default getEntries;
