import React, { useState, useEffect } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const url =
    "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=8Av9puLnXJ00teXfVKCUUaNaYP0FMTgZ";

  const fetchMovies = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //     fetchMovies();
  // }, []);

  const handleMovies = () => {
    fetchMovies();
  };

  return (
    <div>
      <button onClick={handleMovies}>Fetch Movies</button>
      {movies.length !== 0 &&
        movies.map((movie) => {
          // console.log(movie);
          return (
            <div key={movie.opening_date} className="movies">
              <h1>{movie.display_title}</h1>
              <p>{movie.headline}</p>
            </div>
          );
        })}
    </div>
  );
}
