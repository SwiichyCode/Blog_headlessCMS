import "@/styles/globals.css";
import "@/styles/carousel.css";
import "@/styles/main.css";
import AppLayout from "@/layouts/AppLayout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
