import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { fetchCollections } from "@/contentful/content/collections";
import { fetchCollection } from "@/contentful/content/collections";
import GridLayout from "../_layouts/GridLayout";
import CollectionLayout from "../_layouts/CollectionLayout";
import CollectionVideo from "../_components/CollectionVideo";
import ColumnLayout from "../_layouts/ColumnLayout";

interface CollectionPageParams {
  slug: string;
}

interface CollectionPageProps {
  params: CollectionPageParams;
}

export async function generateStaticParams(): Promise<CollectionPageParams[]> {
  const collections = await fetchCollections();

  return collections.map((collection) => ({ slug: collection.url as string }));
}

export async function generateMetadata(
  { params }: CollectionPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const collection = await fetchCollection({ slug: params.slug });

  if (!collection) {
    return notFound();
  }

  return {
    title: collection.title,
  };
}

async function BlogPostPage({ params }: CollectionPageProps) {
  const collection = await fetchCollection({ slug: params.slug });

  if (!collection) {
    return notFound();
  }

  return (
    <CollectionLayout title={collection.title || ""}>
      <ColumnLayout>
        {collection.videos?.map((video: any, index) => (
          <CollectionVideo video={video} key={index} />
        ))}
      </ColumnLayout>
    </CollectionLayout>
  );
}

export default BlogPostPage;
