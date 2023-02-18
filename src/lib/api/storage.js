import { NAME_SPACE } from "./constants";

const LOCAL_STORAGE_TOKEN_KEY_NAME = `AUTH_TOKEN:${NAME_SPACE}`;

export const getToken = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
  return token;
};
export const setToken = (token) => {
  if (token && typeof token === 'string') {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY_NAME, token);
  }
};
export const clearToken = () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
};
