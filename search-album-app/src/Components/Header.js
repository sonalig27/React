import { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = (props) => {
  const [artist, setArtist] = useState("");
  const [albumsList, setAlbumsList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef();

  const inputChangeHandler = () => {
    setArtist(inputRef.current.value);
  };
  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`
      );

      if (!response.ok) {
        throw new Error("Something went wrong while fetching the albums data!");
      }
      const responseData = await response.json();
      const loadedAlbums = [];

      for (let i = 0; i < responseData.resultCount; i++) {
        loadedAlbums.push({
          id: responseData[i].collectionId,
          name: responseData[i].collectionCensoredName,
          albumImgSrc: responseData[i].artworkUrl100,
        });
      }
      setAlbumsList(loadedAlbums);
      setIsLoading(false);
    };
    fetchAlbums().catch((error) => {
      setIsLoading(false);
    });
  }, [artist]);

  const sendAlbumsHandler = (event) => {
    event.preventDefault();
    props.generateAlbums(albumsList);
  };

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <header className="album-search">
      <form className="search" onSubmit={sendAlbumsHandler}>
        <input
          type="text"
          className="search__text"
          onChange={inputChangeHandler}
          placeholder="Search..."
          ref={inputRef}
        />
        <i className="fa fa-search"></i>
      </form>
    </header>
  );
};

export default Header;
