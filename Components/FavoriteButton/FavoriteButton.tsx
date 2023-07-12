import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 12px;
  // padding: 15px 15px;
  border-radius: 50%;
  margin: 10px 0px;
  cursor: pointer;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <div>
      <Button onClick={() => onToggleFavorite(isFavorite)}>🤍</Button>
    </div>
  );
}
