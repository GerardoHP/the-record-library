import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/artists/";

/**
 * Gets all the artists.
 */
export function getArtists() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

/**
 * 
 * @param {artist} artist The artist to be stored/modified.
 */
export function saveArtist(artist) {
  return fetch(baseUrl + (artist.id || ""), {
    method: artist.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(artist)
  })
    .then(handleResponse)
    .catch(handleError);
}

/**
 * 
 * @param {int} artistId The artist id to be deleted.
 */
export function deleteArtist(artistId) {
  return fetch(baseUrl + artistId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}