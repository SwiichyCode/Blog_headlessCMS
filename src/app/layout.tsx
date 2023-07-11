import StyledComponentsRegistry from "./lib/registry";
import { fetchLogo } from "../contentful/logo";
import AppLayout from "@/app/layouts/AppLayout";
import Header from "@/app/components/Header";
import "@/app/styles/globals.css";
import Footer from "@/app/components/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logo = await fetchLogo();
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <AppLayout>
            <Header logo={logo} />
            {children}
            <Footer />
          </AppLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
