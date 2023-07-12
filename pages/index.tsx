import Spotlight from "../Components/Spotlight/spotlight";

type DataObject = {
  photos: [];
  photographer: string;
  src: {
    portrait: string;
  };

  id: number;
};

export default function SpotlightPage({ data, onToggleFavorite }) {
  function getRandomElement(array: DataObject[]) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomObject = getRandomElement(data.photos);

  return (
    <div>
      <Spotlight
        image={randomObject.src.portrait}
        artist={randomObject.photographer}
        onToggleFavorite={onToggleFavorite}
        slug={randomObject.id}
      />
    </div>
  );
}
