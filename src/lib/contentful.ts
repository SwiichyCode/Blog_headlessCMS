import { createClient } from "contentful";

const client = createClient({
  space: "xkcnfj8w50br",
  accessToken: "X1Zp3_P-HmVzPD0rf9CUReCDGJ-hPjvlaUsmnCLtoSU",
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

const getEntries = {
  getBlogPosts,
  getCarouselImages,
};

export default getEntries;
