import React from "react";
import styled from "styled-components";
import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview";

const StyledArtPieces = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const StyledArtPiecesItem = styled.div`
  flex: 0 0 calc(25% - 20px);
  margin: 5px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-basis: calc(33.33% - 20px);
  }

  @media (max-width: 480px) {
    flex-basis: calc(50% - 20px);
  }
`;

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <StyledArtPieces>
      {pieces
        .slice()
        .reverse()
        .map((piece) => (
          <StyledArtPiecesItem key={piece.id}>
            <ArtPiecesPreview
              image={piece.src.portrait}
              artist={piece.photographer}
              onToggleFavorite={onToggleFavorite}
              slug={piece.id}
              artPiecesInfo={artPiecesInfo}
            />
          </StyledArtPiecesItem>
        ))}
    </StyledArtPieces>
  );
}
