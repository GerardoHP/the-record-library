import * as types from "./actionTypes";
import * as albumApi from "../../api/albumApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

export function loadAlbums() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return albumApi
      .getAlbums()
      .then(authors => {
        dispatch(loadAlbumsSuccess(authors));
      })
      .catch(error => {
        dispatch(apiCallError());
      });
  };
}

export function saveAlbums(album) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return albumApi.saveAlbum(album).then(savedAuthor => {
      album.id
        ? dispatch(updateAlbumSuccess(savedAuthor))
        : dispatch(saveAlbumSuccess(savedAuthor));
    });
  };
}

export function deleteAlbum(albumId) {
  return function(dispatch) {
    dispatch(beginApiCall());
    dispatch(deleteAlbum(albumId)); // Optimistacally erase the record before calling the method.
    return albumApi.deleteAlbum(albumId).catch(() => dispatch(apiCallError()));
  };
}

export function loadAlbumsSuccess(authors) {
  return { type: types.LOAD_ALBUMS_SUCCESS, authors };
}

export function updateAlbumSuccess(album) {
  return { type: types.UPDATE_ALBUM_SUCCESS, album };
}

export function saveAlbumSuccess(album) {
  return { type: types.SAVE_ALBUM_SUCCESS, album };
}

export function saveAlbumSuccess(albumId) {
  return { type: types.DELETE_ALBUM_OPTIMISTIC, albumId };
}
