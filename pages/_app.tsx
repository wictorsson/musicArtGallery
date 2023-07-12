import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Layout from "../Components/Layout/Layout";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const { data, error, isLoading } = useSWR(
    "https://api.pexels.com/v1/search?query=music&audio&per_page=20",
    (url) =>
      fetch(url, {
        headers: {
          Authorization:
            "w5pwtkznMBD6IF4jMc6UlXutXAwCzGVBBktpCeDpcwW96cXUHjTY2rTL",
        },
      }).then((res) => res.json())
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading..</div>;
  if (!data) return <div>no data</div>;

  function onToggleFavorite(clickedSlug) {
    setArtPiecesInfo((artPiecesInfo) => {
      // find the piece with the clicked slug
      const favorite = artPiecesInfo.find(
        (favorite) => favorite.clickedSlug === clickedSlug
      );
      // if artPiecesInfo already contains
      if (favorite) {
        // we need to create a new array with all the content
        // but with the object that has the clicked slug changed
        return artPiecesInfo.map((favorite) =>
          favorite.clickedSlug === clickedSlug
            ? { ...favorite, isFavorite: !favorite.isFavorite }
            : favorite
        );
      }
      return [...artPiecesInfo, { clickedSlug, isFavorite: true }];
    });
  }

  console.log(data);
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout />
        <GlobalStyle />
        <Component
          {...pageProps}
          data={data}
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </SWRConfig>
    </>
  );
}
