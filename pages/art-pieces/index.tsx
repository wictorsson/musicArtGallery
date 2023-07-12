import ArtPieces from "../../Components/ArtPieces/ArtPieces";
import React from "react";

export default function RenderArtPieces({ data, onToggleFavorite,artPiecesInfo }) {
  return (
    <div>
      <ArtPieces pieces={data.photos} onToggleFavorite={onToggleFavorite} artPiecesInfo={artPiecesInfo} />
    </div>
  );
}
