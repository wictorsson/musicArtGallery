import React from "react";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const StyledPieces = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 62px;
  padding: 20;
  margin: 20;
  justify-content: left;
`;
const StyledInfo = styled.div`
  list-style-type: none;
  align-contet: center;
`;
const StyledImage = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  width,
  height,
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  return (
    <div>
      <StyledPieces>
        <StyledImage src={image} alt={"image"} width={width} height={height} />
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={slug}
          artPiecesInfo={artPiecesInfo}
        />
        <StyledInfo>
          <ul>
            <li>{artist}</li>
            <li>{title}</li>
            <li>{year}</li>
            <li>{genre}</li>
          </ul>
        </StyledInfo>
      </StyledPieces>
      <Link href="./">
        <Button>Back</Button>
      </Link>
    </div>
  );
}
