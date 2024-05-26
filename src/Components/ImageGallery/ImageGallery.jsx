import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery.module.css";

export default function ImageGallery({ photos, open }) {
  return (
    <ul>
      {photos.map(({ id, urls, slug }) => (
        <li className={css.link} key={id}>
          <ImageCard url={urls} title={slug} onClick={open} />
        </li>
      ))}
    </ul>
  );
}
