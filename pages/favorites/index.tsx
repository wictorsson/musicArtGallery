import React from "react";
import ArtPieces from "../../Components/ArtPieces/ArtPieces";

type Props = {
  artPiecesInfo: {
    clickedSlug: string;
    isFavorite: boolean;
  }[];
  data: {
    photos: {
      slug: string;
      id: string;
    }[];
  };
  onToggleFavorite: boolean;
};

export default function Index({
  artPiecesInfo,
  data,
  onToggleFavorite,
}: Props) {
  console.log(data.photos);
  console.log(artPiecesInfo);

  // artPiecesInfo.map((piece, index) => {
  //   console.log(`Element ${index + 1}:`, piece.clickedSlug);
  //   return null; // Returning null to satisfy the map function requirement
  // });
  // data.photos.map((piece, index) => {
  //   console.log(`Element ${index + 1}:`, piece.id);
  //   return null; // Returning null to satisfy the map function requirement
  // });

  const filteredData = data.photos.filter((photo) => {
    return artPiecesInfo.some(
      (pieceObject) =>
        pieceObject.clickedSlug === photo.id && pieceObject.isFavorite
    );
  });

  //   const filteredData = data.photos.filter((photo) =>
  //   artPiecesInfo.some(
  //     (pieceObject) =>
  //       pieceObject.clickedSlug === photo.id && pieceObject.isFavorite
  //   )
  // );

  console.log("filtered", filteredData);
  return (
    <div>
      <li style={{ listStyle: "none" }}>
        {filteredData && filteredData.length > 0 ? (
          <ArtPieces
            pieces={filteredData}
            onToggleFavorite={onToggleFavorite}
          />
        ) : (
          <div>No art pieces to display</div>
        )}
      </li>
    </div>
  );
}
