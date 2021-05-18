import "./Album.css";

const Album = (props) => {
  return (
    <article class="album">
      <div class="album__data">
        <img class="album__img" src={props.albumImgSrc} alt={props.name} />
        <p class="album__name">${props.name}</p>
      </div>
    </article>
  );
};

export default Album;
