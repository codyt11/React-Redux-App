
import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const NEW_JOKE = "NEW_JOKE";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA});
    axios
    .get("https://cors-anywhere.herokuapp.com/https://api.icndb.com/jokes/random")
    .then(res => 
        {console.log(res);
            dispatch({ type: NEW_JOKE, payload: res.data.value});
    })
    .catch(err => {
        console.log("error fetching from API", err);
        dispatch({type: SET_ERROR, payload: err.data})
    })

}