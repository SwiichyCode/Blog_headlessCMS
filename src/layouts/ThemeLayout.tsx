import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/styles/themes";
import { useThemeStore } from "@/stores/themeStore";

type Props = {
  children: React.ReactNode;
};

export default function ThemeLayout({ children }: Props) {
  const theme = useThemeStore((state) => state.theme);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return <ThemeProvider theme={{ theme: themeMode }}>{children}</ThemeProvider>;
}
