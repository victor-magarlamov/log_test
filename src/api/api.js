const HOST = 'http://api-test.gm.lclients.ru';
const API_URL = `${HOST}/api/`;

export function get (path) {
  const url = `${API_URL}${path}`;

  return fetch(url).then(responseToJSON);
}

function responseToJSON (response) {
  if (response.ok) {
    return response.json();
  }

  throw response.status;
}
