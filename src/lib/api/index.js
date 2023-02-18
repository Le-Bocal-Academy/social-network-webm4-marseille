import { getToken, setToken, clearToken } from "./storage";
import fetch from "./utils"

/** PUBLIC ROUTES */

export const login = async (email, password) => {
  const res = await fetch('/login', {
    method: 'POST',
    body: { email, password },
  });
  if (res.token) setToken(res.token);
  return res.success;
};

export const signin = async (email, password, firstname, lastname) => {
  const res = await fetch('/register', {
    method: 'POST',
    body: { email, password, firstname, lastname },
  });
  return res.success;
};

export const getPosts = async (query = { page: 0, limit: 20 }) => 
  fetch('/posts', { query });

/** PRIVATE ROUTES */

async function privateFetch(req, options = {}) {
  const token = getToken();
  if (!token) throw new Error("No token found, cannot fetch without it");
  
  if (!options.headers) options.headers = {};
  options.headers = {
    ...options.headers,
    Authorization: `bearer ${token}`
  };
  
  return fetch(req, options);
};

export const createPost = async (title, content) => {
  const res = await privateFetch('/post', {
    method: 'POST',
    body: { title, content },
  });
  return res.success;
};

export const createComment = async (postId, content) => {
  const res = await privateFetch('/post/comment', {
    method: 'POST',
    body: { postId, content },
  });
  return res.success;
};

export const createLike = async (postId) => {
  const res = await privateFetch('/post/like', {
    method: 'POST',
    body: { postId },
  });
  return res.success;
};

export const getAuthUser = async () => privateFetch('/user');

export const updateProfile = async (body) => privateFetch('/user', {
  method: 'PUT',
  body,
});

export const getUser = async (id) => privateFetch('/user/' + id);

export const logout = () => {
  clearToken();
  return true;
};