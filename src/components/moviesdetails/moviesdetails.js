// @flow
import * as React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axiosconfig from "../../config/axiosconfig";
export default function MoviesDetails(props) {
  const [movie, setmovie] = useState({});
  const param = useParams();
  useEffect(() => {
    axiosconfig
      .get(`movie/${param.id}`, {
        params: {
          api_key: "6976f22cd306c697e7e577613b6bf75e",
        },
      })
      .then((response) => {
        console.log(response.data);
        setmovie(response.data);
        console.log(movie);
      });
  }, []);
  return (
    <div className="container-fluid " style={{backgroundColor:"rgb(43, 26, 26)" , height:"100vh"}}>
      <div
        className="col-10 m-auto "
        style={{ height: "75vh" }}
      >
        <div className="row text-info">
          <div className="col-4">
            <img
              className="img-fluid  h-100"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie"
            ></img>
          </div>
          <div className="col-4">
            <h3 className="text-light"> {movie.original_title}</h3>
            <p style={{fontSize: "1.2rem"}}><span className="text-light"> Overview : </span>{movie.overview}</p>
            <p><span className="text-light"> Tagline : </span>{movie.tagline}</p>
            <p className="card-text">
               <span className="text-light"> Release Date : </span>{movie.release_date}
            </p>
            <p className="card-text ">
                   <span className="text-light"> Vote : </span>{movie.vote_average}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
