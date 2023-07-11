import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeLogoFields {
  image?: EntryFieldTypes.AssetLink;
}

export type TypeLogoSkeleton = EntrySkeletonType<TypeLogoFields, "logo">;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeLogoSkeleton, Modifiers, Locales>;
