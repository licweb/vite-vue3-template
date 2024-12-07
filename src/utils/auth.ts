import Cookies from "js-cookie";

const TokenKey = "project_cookie";

export const getToken = () => {
  return Cookies.get(TokenKey);
};
export const setToken = (token: string) => {
  Cookies.set(TokenKey, token, { expires: 1 });
};
export const removeToken = () => {
  Cookies.remove(TokenKey);
};
