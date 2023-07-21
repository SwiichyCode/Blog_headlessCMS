import StyledComponentsRegistry from "./lib/registry";
import { fetchLogo } from "../contentful/content/logo";
import { fetchCollections } from "../contentful/content/collections";
import AppLayout from "@/app/layouts/AppLayout";
import Header from "@/app/(pages)/(home)/_components/Header";
import Footer from "@/app/(pages)/(home)/_components/Footer";
import "@/app/styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logo = await fetchLogo();
  const collections = await fetchCollections();

  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <AppLayout>
            <Header logo={logo} collections={collections} />
            {children}
            <Footer />
          </AppLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
