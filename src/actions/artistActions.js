import axios from "axios";
import {
  ARTIST_DETAILS_REQUEST,
  ARTIST_DETAILS_SUCCESS,
  ARTIST_DETAILS_FAIL,
} from "../constants/artistConstants";
const url = "https://rest.bandsintown.com/artists";

export const getArtist = (name) => async (dispatch) => {
  try {
    dispatch({ type: ARTIST_DETAILS_REQUEST });

    const { data } = await axios(`${url}/${name}?app_id=1`);

    dispatch({ type: ARTIST_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ARTIST_DETAILS_FAIL, payload: err });
  }
};
