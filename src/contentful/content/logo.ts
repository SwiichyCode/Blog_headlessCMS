import { Entry } from "contentful";
import { TypeLogoSkeleton } from "../types/TypeLogo";
import { ContentImage, parseContentfulContentImage } from "../utils/Image";
import { contentfulClient } from "../config/contentfulClient";

type LogoEntry = Entry<TypeLogoSkeleton, undefined, string>;

export interface LogoProps {
  image: ContentImage | null;
}

function parseContentfulLogo(logoEntry?: LogoEntry): LogoProps | null {
  if (!logoEntry) {
    return null;
  }

  return {
    image: parseContentfulContentImage(logoEntry.fields.image),
  };
}

export async function fetchLogo() {
  const contentful = contentfulClient();

  const logoResult = await contentful.getEntries({
    content_type: "logo",
  });

  return parseContentfulLogo(logoResult.items[0] as LogoEntry);
}
