// @flow
import * as React from "react";
import axiosconfig from "../../config/axiosconfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./movies.css";
import { setfavorite , counterfavotite } from "../../store/actions/favorite";
import { getmovies } from "../../store/actions/movie";

export default function Movies(props) {
  const fav = useSelector((state) => state.fav);
  const [movies, setmovies] = useState([]);
  const [paging, setpaging] = useState({ i: 1 });
  const movie = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    setmovies(movie);
    console.log(fav);
  },[ fav , movie]);
  useEffect(() => {
    dispatch(getmovies(paging.i));
            // console.log(movies);
  },[paging.i]);
  // useEffect(() => {
  //   // console.log(fav);
  //   // axiosconfig
  //   //   .get("movie/popular", {
  //   //     params: {
  //   //       api_key: "6976f22cd306c697e7e577613b6bf75e",
  //   //       page: paging.i,
  //   //     },
  //   //   })
  //   //   .then((response) => {
  //   //     console.log(response);
  //   //     console.log(response.data.results);
  //   //     setmovies(response.data.results);
  //   //   });

  //     dispatch(getmovies(paging.i));
  //     // console.log(movie);
  //   }, [paging ]);

  function nextpage() {
    let n = paging.i;
    n++;
    console.log(n);
    setpaging({ i: n });
  }
  function pervpage() {
    let n = paging.i;
    n--;
    console.log(n);
    setpaging({ i: n });
  }
  function setfav(e, movie) {
    dispatch(setfavorite(movie));
    const val = e.target;
    val.firstChild.style.fill = "red";
    val.style.fill = "red";
    val.style.stroke = "red";
    dispatch(counterfavotite());
  }
  return (
    <div className="p-0 m-0 back">
      <div className="container back">
        <ul className="row p-0" style={{ listStyle: "none" }}>
          {movies.map((movie, index) => {
            return (
              <li
                key={index}
                className="card col-3 my-2"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top img-fluid"
                  style={{ height: "26rem" }}
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                  >
                    <Link to={`/moviedetails/${movie.id}`}>
                      {movie.original_title}
                    </Link>
                  </h5>
                  <p className="card-text text-info">
                    Vote : {movie.vote_average}
                  </p>
                  {/* <button className="btn btn-primary" >like</button> */}
                  <div className="div-btn">
                    <button
                      className="btn-like"
                      onClick={(e) => setfav(e, movie)}
                    >
                      <svg
                        fill="none"
                        stroke="black"
                        stroke-width="2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="26px"
                        height="24px"
                      >
                        <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
          <div className="d-flex justify-content-between">
            <div>
              <button className="btn btn-light " onClick={() => pervpage()}>
                perv
              </button>
            </div>
            <div className="text-end">
              <button className="btn btn-light " onClick={() => nextpage()}>
                next
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
