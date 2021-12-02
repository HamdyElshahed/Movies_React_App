import axiosconfig from "../../config/axiosconfig";
export const getmovies = (i) =>(dispatch) => {
    return  axiosconfig
    .get("movie/popular", {
      params: {
        api_key: "6976f22cd306c697e7e577613b6bf75e",
        page: i,
      },
    })
    .then((response) => {
        dispatch({type: 'GET_MOVIE' , payload : response.data.results})
      console.log(response);
      console.log(response.data.results);
    },(err)=>{console.log(err)})

}