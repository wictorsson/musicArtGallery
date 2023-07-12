import React from "react";
import ArtPieceDetails from "../../Components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

type Piece = {
  slug: string;
  imageSource: string;
  name: string;
  artist: string;
  year: number;
  genre: string;
  src: {
    portrait: string;
  };

  dimensions: {
    width: number;
    height: number;
  };
};

export default function ArtPieceDetailsSlug({ data, onToggleFavorite }) {
  const router = useRouter();
  const { slug } = router.query;
  const pieceIndex = data.photos.find((piece: Piece) => piece.slug === slug);

  return (
    <div>
      <ArtPieceDetails
        image={pieceIndex.src.portrait}
        title={pieceIndex.name}
        artist={pieceIndex.artist}
        year={pieceIndex.year}
        genre={pieceIndex.genre}
        width={pieceIndex.dimensions.width}
        height={pieceIndex.dimensions.height}
        onToggleFavorite={onToggleFavorite}
        slug={pieceIndex.slug}
      />
    </div>
  );
}
