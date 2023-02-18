import { NAME_SPACE, DOMAIN } from './constants';

export const buildPath = (path = "") => {
  if (path.startsWith("/" + NAME_SPACE)) return new URL(path, DOMAIN);
  else if (path.startsWith("/")) return new URL("/" + NAME_SPACE + path, DOMAIN);
  return new URL("/" + NAME_SPACE + "/" + path, DOMAIN);
};

export const buildUrl = (path = "", query = {}) => {
  const url = buildPath(path);
  Object.entries(query).forEach(([key, value]) => url.searchParams.set(key, value));
  return url;
};

export const buildHeaders = (headers = {}) => ({
  headers: {
    "Content-Type": "application/json",
    ...headers,
  }
});
export const buildBody = (body) => (typeof body !== 'string' && body ? { body: JSON.stringify(body) } : null);

export const handleApiResponse = async (res) => {
  if (res.ok) return res.json();

  if (res.headers.get("Content-Type").startsWith("application/json")) {
    const json = await res.json();
    if (typeof json.message === 'string') {
      throw new Error(`ERROR ${res.status}: ${json.message}`);
    } else {
      throw new Error(`ERROR ${res.status}: ${JSON.stringify(json)}`);
    }
  } else {
    const text = await res.text();
    throw new Error(`ERROR ${res.status}: ${text}`);
  }
}

async function fetchFromApi(req, options = {}) {
  const { query = {}, headers = {}, body, ...opts } = options;
  const url = typeof req === "string" ? buildUrl(req, query) : req;

  return fetch(url.toString(), {
    ...opts,
    ...buildHeaders(headers),
    ...buildBody(body),
  }).then(handleApiResponse);
}

export default fetchFromApi;