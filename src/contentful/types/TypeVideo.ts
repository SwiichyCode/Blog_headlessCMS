import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeVideoFields {
  description?: EntryFieldTypes.Text;
  video?: EntryFieldTypes.AssetLink;
}

export type TypeVideoSkeleton = EntrySkeletonType<
  TypeVideoFields,
  "carouselVideo"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeVideoSkeleton, Modifiers, Locales>;
