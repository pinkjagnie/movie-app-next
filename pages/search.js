import { useState } from 'react';
import Link from 'next/link';

import MovieItem from '../components/movies/movie-item';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';

import styles from "../components/ui/search.module.css";

function SearchPage(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [addSingleMovie, setAddSingleMovie] = useState(false);


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = props.movies.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    //setFilteredData(newFilter);

    if (searchWord === "") {
      setFilteredData([]);
      setAddSingleMovie(false);
    } if (searchWord.trim() != "" && filteredData.length === 0) {
      setAddSingleMovie(true);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setAddSingleMovie(false);
  };

  const addMovie = <div className={styles.linkContainer}>
      <p>Did not find what you are looking for?</p>
      <Link href="/add"><a><p className={styles.link}>Add movie to our database</p></a></Link>
    </div>;


  return(
    <div className={styles.searchSection}>
      <div className={styles.sloganSection}>
        <h3>Find your favorite movie in our database</h3>
      </div>
      <div>
        {addSingleMovie ? addMovie : undefined}
      </div>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Type to search..." autoFocus className={styles.searchInput} value={wordEntered} onChange={handleFilter}/>
        <div className={styles.button}>
          {filteredData.length === 0 ? <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} /> : <FontAwesomeIcon icon={faClose} className={styles.closeIcon} onClick={clearInput} />}
        </div>
      </div>
      {filteredData.length != 0 &&  <div className={styles.dataResult}>
        {filteredData.slice(0, 15).map((movie) => {
          return <div className={styles.dataItem} key={movie.slug}>
                  <Link href={`/movies/${movie.slug}`}>
                    <a>
                      <MovieItem movie={movie}/>
                    </a>
                  </Link>
              </div>
        })}
      </div>}
    </div>
  )
}

export default SearchPage;

export async function getServerSideProps() {

  let res = await fetch("http://localhost:3000/api/movies", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  let movies = await res.json();

  return {
    props: { 
      movies: movies.movies
    },
  };
}