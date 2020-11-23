import axios from "axios";
import {
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAIL,
} from "../constants/eventConstants";

const url = "https://rest.bandsintown.com/artists";

export const getEvents = (name) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_LIST_REQUEST });

    const { data } = await axios(`${url}/${name}/events?app_id=1&date=all`);

    dispatch({ type: EVENT_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: EVENT_LIST_FAIL, payload: err });
  }
};
