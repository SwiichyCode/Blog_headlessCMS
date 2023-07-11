import { Asset, AssetLink } from "contentful";

export interface ContentVideo {
  src: string;
}

export function parseContentfulContentVideo(
  asset?: Asset<undefined, string> | { sys: AssetLink }
): ContentVideo | null {
  if (!asset) {
    return null;
  }

  if (!("fields" in asset)) {
    return null;
  }

  return {
    src: asset.fields.file?.url || "",
  };
}
