/**
 * 
 * @param {*} response The response retrieved from the service.
 */
export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

/**
 * 
 * @param {*} error The error to handle.
 */
export function handleError(error) {
  // TODO: Add propper logging.
  console.error("API call failed. " + error);
  throw error;
}
