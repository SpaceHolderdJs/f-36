console.log(document.cookie, "cookie");

// basic cookies

document.cookie = "name=Igor";
document.cookie = "email=email@gmail.com";

// cookies with parameters

const expireDate = new Date();

expireDate.setMinutes(expireDate.getMinutes() + 1);

console.log(expireDate.toUTCString());

document.cookie = `userID=12345; path=/; expires=${expireDate.toUTCString()}`;

const getAllCookies = () => {
  const cookieData = {};

  document.cookie.split(";").forEach((cookiePair) => {
    const normalizePair = cookiePair.trim();
    const [key, value] = normalizePair.split("=");

    cookieData[key] = value;
  });

  return cookieData;
};

const removeCookie = (cookieName) => {
  const expiresNowDate = new Date();
  document.cookie = `${cookieName}=; expires=${expiresNowDate.toUTCString()}`;
};

const cookie = getAllCookies();
console.log(cookie);
console.log(cookie.name);

setTimeout(() => removeCookie("name"), 2000);

console.log(getAllCookies());

// document.cookie =
//   "access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInVzZXIiOiJrZXZpbnJ5YW4iLCJpYXQiOjE3NDA2NzczMDZ9.chA6HdfQLMhKIpgJs7AD84coYj9kAg5rOOjebrT3-IE";

// JS-Cookie library

// Create a basic value
Cookies.set("role", "admin");

// Cookies with options
Cookies.set("car", "ford", {
  expires: 365,
  //   domain: "/",
  //   path: "/",
});

Cookies.set("cookie-to-expire", ":)", { expires: 7 });

Cookies.remove("cookie-to-expire");

["name", "cookie-to-expire", "role"].forEach((cookieToRemove) =>
  Cookies.remove(cookieToRemove)
);

const valueFromCookie = Cookies.get("car");
console.log(valueFromCookie, "car");

console.log(Cookies.get(), "all the cookies");

for (const key in Cookies.get()) {
  console.log(key, "cookie from the loop");
}

// Preventing a bad naming and conflicts
const cookiesLibrary = Cookies.noConflict();

console.log(cookiesLibrary, "cookiesLibrary");

cookiesLibrary.set("set-cookie-from-the-lib-name", ":)", {
  secure: true,
  sameSite: true,
});

// https://google.com
// http://
