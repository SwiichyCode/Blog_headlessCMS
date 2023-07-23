"use client";
import styled from "styled-components";
import Link from "next/link";

const HomeLink = styled(Link)`
  font-size: 2rem;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.36px;
  text-decoration: none;
`;

export default function Logo() {
  return <HomeLink href="/">FlorenceIllouz</HomeLink>;
}
