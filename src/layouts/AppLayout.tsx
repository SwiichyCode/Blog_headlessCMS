import ThemeLayout from "@/layouts/ThemeLayout";
import { GlobalStyles } from "@/styles/globalStyles";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <ThemeLayout>
      <GlobalStyles />
      {children}
    </ThemeLayout>
  );
}
