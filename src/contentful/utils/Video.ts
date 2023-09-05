import { Asset, AssetLink } from "contentful";

export interface ContentVideo {
  title?: string;
  description?: string;
  src: string;
  createdAt?: string;
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
    title: asset.fields.title || "",
    description: asset.fields.description || "",
    src: asset.fields.file?.url || "",
    createdAt: asset.sys.createdAt || "",
  };
}
