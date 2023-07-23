"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Logo";
import ButtonMenu from "../ButtonMenu";
import Clock from "../Clock";
import Location from "../Location";
import Menu from "../Menu";

const NavigationWrapper = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6.6rem;
  background-color: #0b0a0a;
`;

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isMenuOpen && (
        <NavigationWrapper>
          <Logo />
          <Clock />
          <Location />
          <ButtonMenu setIsMenuOpen={setIsMenuOpen} />
        </NavigationWrapper>
      )}
      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
}
