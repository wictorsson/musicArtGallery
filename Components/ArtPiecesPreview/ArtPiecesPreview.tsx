import React from "react";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const StyledPieces = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  // margin: 40px;
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  min-width: 200px;
`;

const StyledImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 5px;
`;

const StyledContent = styled.div`
  display: flex;
  font-size: 12px;
  flex-direction: column;
  align-self: flex-end;
  padding-left: 15px;
`;

const StyledArtPiece = styled.div`
  display: flex;
  //flex-direction: row;
  align-items: center;
`;

const StyledTitle = styled.div`
  display: flex;
  font-size: 10px;
  text-decoration-line: underline;
  flex-direction: column;
`;

const StyledSpan = styled.div`
  display: flex;
  font-size: 12px;

  flex-direction: column;
`;

export default function ArtPiecesPreview({
  image,
  artist,
  onToggleFavorite,
  slug,

  artPiecesInfo,
}) {
  return (
    <StyledPieces>
      <StyledArtPiece>
        <StyledImageContainer>
          <StyledImage src={image} alt="image" />
        </StyledImageContainer>
        <StyledContent>
          <StyledTitle>Photo</StyledTitle>
          <StyledSpan>{artist}</StyledSpan>
          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            isFavorite={slug}
            artPiecesInfo={artPiecesInfo}
          />
        </StyledContent>
      </StyledArtPiece>
    </StyledPieces>
  );
}
