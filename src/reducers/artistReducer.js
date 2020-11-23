import {
  ARTIST_DETAILS_REQUEST,
  ARTIST_DETAILS_SUCCESS,
  ARTIST_DETAILS_FAIL,
} from "../constants/artistConstants";

const artistReducer = (state = { artist: {} }, action) => {
  switch (action.type) {
    case ARTIST_DETAILS_REQUEST:
      return { loading: true };
    case ARTIST_DETAILS_SUCCESS:
      return { loading: false, artist: action.payload };
    case ARTIST_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default artistReducer;
