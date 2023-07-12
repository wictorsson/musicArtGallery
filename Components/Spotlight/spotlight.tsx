import React from "react";
import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const StyledPieces = styled.div`
  list-style-type: none;
  //position: relative;
  display: flex;
  //align-items: center;
  padding: 60px;
  //margin: 20px;
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
`;

const StyledImage = styled.img`
  width: 50%; /* Set the image width to 50% */
  height: auto; /* Automatically calculate the image height based on the aspect ratio */
  border-radius: 8px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;

const StyledTitle = styled.div`
  display: flex;
  font-size: 12px;
  text-decoration-line: underline;
  flex-direction: column;
`;

export default function Spotlight({
  image,
  artist,
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  return (
    <StyledPieces>
      <StyledImageContainer>
        <StyledImage src={image} alt="image" />
      </StyledImageContainer>
      <StyledContent>
        <StyledTitle>Photo</StyledTitle> <span>{artist}</span>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={slug}
          artPiecesInfo={artPiecesInfo}
        />
      </StyledContent>
    </StyledPieces>
  );
}
