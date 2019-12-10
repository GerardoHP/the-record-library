import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function artistReducer(state = initialState.artists, action) {
  switch (action.type) {
    case types.LOAD_ARTISTS_SUCCESS:
      return action.artists;
    case types.SAVE_ARTIST_SUCCESS:
      return [...state, { ...action.artist }];
    case types.DELETE_ARTIST_OPTIMISTIC:
      return state.filter(a => a.id !== parseInt(action.artistid));
    case types.UPDATE_ARTIST_SUCCESS:
      return state.map(a => (a.id === action.artist.id ? action.artist : a));
    default:
      return state;
  }
}
