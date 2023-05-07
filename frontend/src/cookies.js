import Cookie from "js-cookie";

export const setCookie = (cookiename, usrin) => {
  Cookie.set(cookiename, usrin, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};
export const getCookie = (cookiename) => {
  return Cookie.get(cookiename);
};
export const removeCookie = (cookiename) => {
  return Cookie.remove(cookiename);
};
