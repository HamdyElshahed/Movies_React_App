// @flow
import * as React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosconfig from "../../config/axiosconfig";
import { Link } from "react-router-dom";

export default function Search(props) {
  const [searchkey, setsearchkey] = useState();
  const [searchvalue, setsearchvalue] = useState([]);
  const loc = useLocation();

  const query = new URLSearchParams(loc.search);
  const key = query.get("search");
  useEffect(() => {
    setsearchkey(key);
    console.log(key);
    axiosconfig
      .get(`search/movie`, {
        params: {
          api_key: "6976f22cd306c697e7e577613b6bf75e",
          query: { searchkey },
        },
      })
      .then((response) => {
        console.log(response.data.results);
        console.log(response.data);
        setsearchvalue(response.data.results);
      });
  }, [key , searchkey]);
  return (
    <div>
      <ul>
        {searchvalue.map((movie , index) => {
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
              <p className="card-text text-info">Vote : {movie.vote_average}</p>
            </div>
          </li>
          );
        })}
      </ul>
    </div>
  );
}
