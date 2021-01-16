import React, { useState } from "react";
import MovieCard from "./movieCard";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async e => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=9b12df64d55afae8168300b64560b87d&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      console.log(movies);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          className="input"
          placeholder="Search Movies"
          name="query"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
         <MovieCard movie={movie}  key={movie.id}/>
        ))}
      </div>
    </>
  );
};

export default MovieSearch;
