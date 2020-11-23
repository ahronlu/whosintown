import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import artist from "./reducers/artistReducer";
import event from "./reducers/eventReducer";
import favorites from "./reducers/favoritesReducer";

const reducer = combineReducers({ artist, event, favorites });

const favoritesFromStorage = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : { favorites: [] };

const initialState = { favorites: favoritesFromStorage };

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
