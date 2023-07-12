import ArtPieceDetails from "../../Components/ArtPieceDetails/ArtPieceDetails";
import React from "react";

type Piece = {
  image: string;
  title: string;
  artist: string;
  year: number;
  genre: string;
  width: number;
  height: number;
  onToggleFavorite: (slug: string) => void;
  slug: string;
  artPiecesInfo: string;
};

type Props = {
  data: Piece[];
  onToggleFavorite: (slug: string) => void;
};

export default function RenderArtPieces({ data, onToggleFavorite }: Props) {
  if (!Array.isArray(data)) {
    // Handle the case where `data` is not an array
    return <div>No art pieces to display</div>;
  }

  return (
    <div>
      {data.map((piece) => (
        <ArtPieceDetails
          key={piece.slug}
          image={piece.image}
          title={piece.title}
          artist={piece.artist}
          year={piece.year}
          genre={piece.genre}
          width={piece.width}
          height={piece.height}
          onToggleFavorite={piece.onToggleFavorite}
          slug={piece.slug}
          artPiecesInfo={piece.artPiecesInfo}
        />
      ))}
    </div>
  );
}
