import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/albums/";

/**
 * Get all the albums available.
 */
export function getAlbums() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

/**
 * @param {album} album The album to be stored/modified.
 */
export function saveAlbum(album) {
  return fetch(baseUrl + (album.id || ""), {
    method: album.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(album)
  })
    .then(handleResponse)
    .catch(handleError);
}

/**
 * 
 * @param {int} albumId The album id to be delted.
 */
export function deleteAlbum(albumId) {
  return fetch(baseUrl + albumId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
