

import React from "react";



const MovieTable = ({ movie }) => {
  return (
    <div className="testerTable">
      <table className="table">
          <thead className="thead-dark">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Year</th>
                <th scope="col">Type</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
            <td>{movie.Type}</td>
          </tr>
        </tbody>
        </table>
    </div>
  );
};


export default MovieTable;

