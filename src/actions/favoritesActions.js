import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../constants/favoritesConstants";

export const addToFavorites = (event) => async (dispatch, getState) => {
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: event,
  });

  localStorage.setItem("favorites", JSON.stringify(getState().favorites));
};

export const removeFromFavorites = (event) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: event.id,
  });

  localStorage.setItem("favorites", JSON.stringify(getState().favorites));
};
