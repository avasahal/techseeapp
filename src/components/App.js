import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import MovieTable from "./MovieTable";
import Search from "./Search";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours


const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
    };
    


    return (
     <div className="App">
      <Header text="Search Movies" />
      <Search search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <table className="table">
          <thead className="thead-dark">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Year</th>
                <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Type}</td>
              </tr>
              
              
             ))}
             
          </tbody>
        </table>
            
        )}
      </div>
    </div>
  );
};


export default App;

