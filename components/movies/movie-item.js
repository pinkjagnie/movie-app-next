import Link from "next/link";
import Image from "next/image";

import styles from "./movie-item.module.css";

function MovieItem(props) {
  const { slug, title, image, year, time, director, writer, production } = props.movie;

  const linkPath = `/movies/${slug}`;

  return (
    <li className={styles.movie}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image src={image} alt={title} width={300} height={200} layout="responsive"/>
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{time}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default MovieItem;