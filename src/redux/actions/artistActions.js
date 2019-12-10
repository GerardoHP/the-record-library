import * as types from "./actionTypes";
import * as artistApi from "../../api/artistApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

export function loadArtists() {
  return function(dispatch) {
    dispatch(beginApiCall);
    return artistApi
      .getArtists()
      .then(artists => dispatch(loadArtistsSuccess(artists)))
      .catch(() => dispatch(apiCallError()));
  };
}

export function saveArtists(artist) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return artistApi
      .saveArtist(artist)
      .then(savedArtist =>
        artist.id
          ? dispatch(updateArtitSuccess(savedArtist))
          : dispatch(saveArtistSuccess(savedArtist))
      )
      .catch(() => dispatch(apiCallError()));
  };
}

export function deleteArtist(artistId) {
  return function(dispatch) {
    dispatch(beginApiCall());
    dispatch(deleteArtistOptimistic(artistId));
    return artistApi
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
  return { type: types.SAVE_ARTIST_SUCCESS, artist };
}

export function deleteArtistOptimistic(artistId) {
  return { type: types.DELETE_ARTIST_OPTIMISTIC, artistId };
}
