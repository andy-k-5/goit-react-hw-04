import css from "./ImageCard.module.css";
export default function ImageCard({ url: { small, regular }, title, onClick }) {
  const handleClick = () => {
    onClick(regular);
  };
  return (
    <div>
      <img
        className={css.images}
        src={small}
        alt={title}
        onClick={handleClick}
      />
    </div>
  );
}
