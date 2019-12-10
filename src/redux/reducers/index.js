import { combineReducers } from "redux";
import albums from "./albumReducer";
import artists from "./artistReducer";

const rootReducer = combineReducers({
  albums,
  artists
});

export default rootReducer;
