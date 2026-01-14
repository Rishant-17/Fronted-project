import styles from "./Netflix.module.css";


export const SeriesCard = ({ data }) => {
  const {
    id,
    img_url,
    name,
    rating,
    description,
    genre,
    cast,
    watch_url
  } = data;


 const btn_style = {
  padding: '1.2rem 2.4rem',
  border: 'none',
  fontSize: '1.6rem',
  backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  color: 'var(--bg-color)',
};

const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  return (
    <li key={id} className={styles.card}>
      <div className="image-box">
        <img
          src={img_url}
          alt={name}
          width="40%"
          height="40%"
          className="series-image"
        />
      </div>
      <div className={styles["card-content"]}>
      <h2>Name: {name}</h2>
      <h3>Rating:
      <span className={`${styles.rating} ${ratingClass}`}>

  {rating}
</span>
 ⭐</h3>
      <p className="text-3xl font-bold un">Summary: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {Array.isArray(cast) ? cast.join(", ") : cast}</p>

      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        <button style={btn_style}>
        Watch Now</button>
      </a>
      </div>
    </li>
  );
};
