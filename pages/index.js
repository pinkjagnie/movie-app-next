import { useEffect } from "react";

import About from "../components/home-page/about";
import FeaturedMovies from "../components/home-page/featured-movies";

import config from "../lib/config";

// import { getFeaturedMovies } from "../helpers/db-util";

function HomePage(props) {
  return(
    <>
      <About />
      <FeaturedMovies movies={props.movies}/>
    </>
  )
}

export default HomePage;

// export function getStaticProps() {
//   const featuredMovies = getFeaturedMovies();

//   return {
//     props: {
//       movies: featuredMovies,
//     },
//   };
// }

export async function getServerSideProps(context) {
  console.log("WCHOOOOODZEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
  let res = await fetch("http://localhost:3000/api/movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) { console.log("PIXEL JEST DIABLEM")}
  let movies = await res.json();
  //let movies = DUMMY_MOVIES

  
  console.log("MOJE PROPSY" + movies)
  // let movies = allMovies.toArray();
  // let featuredMovies = allMovies.movies.filter((movie) => movie.isFeatured)

  return {
    props: { 
      movies: movies.movies
    },
  };
}
