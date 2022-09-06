import Image from "next/image";

import styles from "./movie-header.module.css";

function MovieHeader(props) {
  const { title, year, time, director, writer, production, image } = props.movie;

  return (
    <header className={styles.header}>
      <div>
        <h1>{title}</h1>
        <p>{year}</p>
        <p>{time}</p>
        <p>Director: {director}</p>
        <p>Writer: {writer}</p>
        <p>Production: {production}</p>
      </div>
      <Image src={image} alt={title} width={250} height={300} />
    </header>
  );
}

export default MovieHeader;