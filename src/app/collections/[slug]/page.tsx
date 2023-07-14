import { Metadata, ResolvingMetadata } from "next";
// import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchCollections } from "@/contentful/collections";
import { fetchCollection } from "@/contentful/collections";

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
    <div>
      <h1>{collection.title}</h1>
    </div>
  );
}

export default BlogPostPage;
