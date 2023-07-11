import { createClient } from "contentful";

const { CONTENTFUL_SPACE_PROD, CONTENTFUL_ACCESTOKEN_PROD } = process.env;

const client = createClient({
  space: CONTENTFUL_SPACE_PROD!,
  accessToken: CONTENTFUL_ACCESTOKEN_PROD!,
});

export function contentfulClient() {
  return client;
}
