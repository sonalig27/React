import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Albums from "./Components/Albums";
function App() {
  const [albums, setAlbums] = useState([]);

  const albumsListHandler = (generatedAlbums) => {
    setAlbums(generatedAlbums);
  };
  return (
    <div className="App">
      <Header generateAlbums={albumsListHandler} />
      <section className="search-header">
        <h2 className="search-title">Search Albums by Artist Name:</h2>
      </section>
      <Albums albums={albums} />
    </div>
  );
}

export default App;
