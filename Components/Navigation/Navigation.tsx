import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  list-style-type: none;
  display: flex;
  // flex-wrap: wrap;

  align-content: center;
  justify-content: center;
  background-color: black;
  color: white;
  border-width: 10px;
  border-color: black;
  text-decoration: none;
  background-color: #1b1b1b;
  height: 46px;
  width: 100%;
  line-height: 36px;
  overflow: hidden;
  white-space: nowrap;
  position: fixed;
`;
const StyledNav = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 82px;
  padding: 20;
  margin: 40;
  justify-content: center;
  a,
  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: rgb(225, 225, 200, 100);
  }
`;

export default function Navigation() {
  return (
    <div>
      <StyledHeader>
        <StyledNav>
          <Link href="../art-pieces">Pieces</Link>
          <Link href="../">Spotlight</Link>
          <Link href="../favorites">Favorites</Link>
        </StyledNav>
      </StyledHeader>
    </div>
  );
}
