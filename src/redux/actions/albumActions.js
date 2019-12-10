import * as types from "./actionTypes";
import * as albumApi from "../../api/albumApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

export function loadAlbums() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return albumApi
      .getAlbums()
      .then(albums => {
        dispatch(loadAlbumsSuccess(albums));
      })
      .catch(() => {
        dispatch(apiCallError());
      });
  };
}

export function saveAlbums(album) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return albumApi.saveAlbum(album).then(savedAlbum => {
      album.id
        ? dispatch(updateAlbumSuccess(savedAlbum))
        : dispatch(saveAlbumSuccess(savedAlbum));
    });
  };
}

export function deleteAlbum(albumId) {
  return function(dispatch) {
    dispatch(beginApiCall());
    dispatch(deleteAlbumOptimistic(albumId)); // Optimistacally erase the record before calling the method.
    return albumApi.deleteAlbum(albumId).catch(() => dispatch(apiCallError()));
  };
}

export function loadAlbumsSuccess(albums) {
  return { type: types.LOAD_ALBUMS_SUCCESS, albums };
}

export function updateAlbumSuccess(album) {
  return { type: types.UPDATE_ALBUM_SUCCESS, album };
}

export function saveAlbumSuccess(album) {
  return { type: types.SAVE_ALBUM_SUCCESS, album };
}

export function deleteAlbumOptimistic(albumId) {
  return { type: types.DELETE_ALBUM_OPTIMISTIC, albumId };
}
