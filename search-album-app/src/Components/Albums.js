import Album from "./Album";
import "./Albums.css";

const Albums = (props) => {
  const AlbumsList = props.albums.map((album) => {
    return (
      <Album id={album.id} name={album.name} albumImgSrc={album.albumImgSrc} />
    );
  });
  return (
    <main className="container">
      <div className="albums">{AlbumsList}</div>
    </main>
  );
};

export default Albums;
