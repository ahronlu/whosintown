import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../constants/favoritesConstants";

const favoritesReducer = (state = { favorites: [] }, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        favorites: state.favorites.filter(
          (event) => event.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
