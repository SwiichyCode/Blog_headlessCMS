import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeCollectionsFields {
  title?: EntryFieldTypes.Text;
  order?: EntryFieldTypes.Integer;
  url?: EntryFieldTypes.Symbol;
  video?: EntryFieldTypes.AssetLink;
  description?: EntryFieldTypes.Text;
  videos?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeCollectionsSkeleton = EntrySkeletonType<
  TypeCollectionsFields,
  "collections"
>;
export type TypeCollections<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeCollectionsSkeleton, Modifiers, Locales>;
