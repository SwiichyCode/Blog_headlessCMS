import Navigation from "@/components/Navigation/Navigation";
import { LogoProps } from "@/types/Logo";
import { HeaderWrapper } from "./styles";

type Props = {
  logo: LogoProps[];
};

export default function Header({ logo }: Props) {
  return (
    <HeaderWrapper>
      <Navigation logo={logo} />
    </HeaderWrapper>
  );
}
