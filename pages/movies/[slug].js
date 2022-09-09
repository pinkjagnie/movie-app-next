import MovieContent from "../../components/movies/movie-detail/movie-content";

function MovieDetailPage(props) {
  return <MovieContent movie={props.movie}/>;
}

export default MovieDetailPage;

export async function getServerSideProps(context) {

  const { params } = context;
  const { slug } = params;

  let res = await fetch("http://localhost:3000/api/movies", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  let movies = await res.json();
  let movieData = await movies.movies.find(movie => movie.slug === slug)

   return {
    props: {
      movie: movieData,
    }
  };
}