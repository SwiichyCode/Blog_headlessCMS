import Navigation from "@/app/components/Navigation_/Navigation_";
import CollectionsLayout from "./_layouts/CollectionsLayout";

type Props = {
  children: React.ReactNode;
};

export default function Collections_Layout({ children }: Props) {
  return (
    <CollectionsLayout>
      {children}
      <Navigation />
    </CollectionsLayout>
  );
}
