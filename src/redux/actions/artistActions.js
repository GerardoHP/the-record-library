import * as types from "./actionTypes";
import * as albumApi from "../../api/artistApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

export function loadArtists() {
  return function(dispatch) {
    dispatch(beginApiCall);
    return albumApi
      .getArtists()
      .then(artists => dispatch(loadArtistsSuccess(artists)))
      .then(() => dispatch(apiCallError()));
  };
}

export function saveArtists(artist) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return albumApi
      .saveArtist(artist)
      .then(savedArtist =>
        artist.id
          ? dispatch(updateArtitSuccess(artist))
          : dispatch(saveArtistSuccess(artist))
      )
      .catch(() => dispatch(apiCallError()));
  };
}

export function deleteArtistOptimistic(artistId) {
  return function(dispatch) {
    dispatch(beginApiCall());
    dispatch(deleteArtistOptimistic(deleteId));
    return albumApi
      .deleteArtist(artistId)
      .catch(() => dispatch(apiCallError()));
  };
}

export function loadArtistsSuccess(artists) {
  return { type: types.LOAD_ARTISTS_SUCCESS, artists };
}

export function updateArtitSuccess(artist) {
  return { type: types.UPDATE_ARTIST_SUCCESS, artist };
}

export function saveArtistSuccess(artist) {
  return { type: types.SAVE_ARTIST_SUCCESS, artists: artist };
}

export function deleteArtistOptimistic(artistId) {
  return { type: types.DELETE_ARTIST_OPTIMISTIC, artists: artistId };
}
