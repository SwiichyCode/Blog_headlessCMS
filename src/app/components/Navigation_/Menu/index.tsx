import styled from "styled-components";
import Link from "next/link";

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 728px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 40px 40px 0px 0px;
  background: #ededed;
`;

const MenuFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6.6rem;
  color: #0b0a0a;
`;

const MenuNav = styled.nav`
  display: flex;
  gap: 0.9rem;
`;

const MenuSocialLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.32px;
`;

const ButtonClose = styled.button`
  width: 7.8rem;
  display: flex;
  align-items: center;
  gap: 0.77rem;
  font-size: 1.8rem;
  background-color: transparent;
`;

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Menu({ setIsMenuOpen }: Props) {
  return (
    <MenuWrapper>
      <MenuFooter>
        <MenuNav>
          <MenuSocialLink href="/">Instagram,</MenuSocialLink>
          <MenuSocialLink href="/">Facebook,</MenuSocialLink>
        </MenuNav>
        <ButtonClose onClick={() => setIsMenuOpen(false)}>Close</ButtonClose>
      </MenuFooter>
    </MenuWrapper>
  );
}
