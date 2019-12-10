import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function albumReducer(state = initialState.albums, action) {
  switch (action.type) {
    case types.LOAD_ALBUMS_SUCCESS:
      return action.albums;
    case types.SAVE_ALBUM_SUCCESS:
      return [...state, { ...action.album }];
    case types.UPDATE_ALBUM_SUCCESS:
      return state.map(a => (a.id === action.album.id ? action.album : a));
    case types.DELETE_ALBUM_OPTIMISTIC:
      return state.filter(a => a.id !== parseInt(action.albumId));
    default:
      return state;
  }
}
