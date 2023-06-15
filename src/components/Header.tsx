import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="flex items-center w-4/6 h-[136px] gap-6 px-8 my-4 border-b-[1px]">
      <Logo />
      <Navigation />
    </header>
  );
}
