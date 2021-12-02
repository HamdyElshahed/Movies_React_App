// @flow
import * as React from "react";
import { delfavotite , counterfavotite } from "../../store/actions/favorite";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../movies/movies.css";

export default function Favorite(props) {
  const fav = useSelector((state) => state.fav.data);
  const dispatch = useDispatch();
  function delfav(e, id) {
    dispatch(delfavotite(id));
    console.log(fav);
    dispatch(counterfavotite());
  }
  return (
    <div className="p-0 m-0 back" style={{height: '100vh'}}>
      <div className="container back">
        <ul className="row p-0" style={{ listStyle: "none" }}>
          {fav?.map((f, index) => {
            return (
              <li
                key={index}
                className="card col-3 my-2"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${f.poster_path}`}
                  className="card-img-top img-fluid"
                  style={{ height: "26rem" }}
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                  >
                    <Link to={`/moviedetails/${f.id}`}>
                      {f.original_title}
                    </Link>
                  </h5>
                  <p className="card-text text-info">
                    Vote : {f.vote_average}
                  </p>
                  <div className="div-btn">
                    <button
                      className="btn-like"
                      style={{ paddingTop: "4px" }}
                      onClick={(e) => delfav(e, f.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
                      </svg>{" "}
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
