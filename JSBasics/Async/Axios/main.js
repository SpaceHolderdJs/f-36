console.log(axios);

// axios

fetch("url", { method: "POST", body: JSON.stringify({ name: "Igor" }) });
fetch("url", { method: "GET" })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => {});

// GET
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res.data, "data"))
  .catch((err) => console.log(err));

// POST
axios
  .post("https://jsonplaceholder.typicode.com/users", {
    id: 11,
    username: "Igor",
    email: "email@gmail.com",
  })
  .then((res) => console.log(res, "response from post"))
  .catch((err) => console.log(err));

// PATCH, PUT
axios
  .patch("https://jsonplaceholder.typicode.com/users/1", {
    username: "Igor",
  })
  .then((res) => console.log(res, "response from patch"))
  .catch((err) => console.log(err));

// DELETE
axios
  .delete("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => console.log(res, "response from delete"))
  .catch((err) => console.log(err));

// Alternative syntax

axios({
  method: "POST",
  url: "https://jsonplaceholder.typicode.com/users",
  data: { id: 11, email: "email@gmail.com" },
})
  .then((res) =>
    console.log(res, "res from the alternative syntax post request")
  )
  .catch((err) => console.log(err));

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "content-type": "application/json" },
  transformResponse: [
    (jsonData) => {
      console.log(JSON.parse(jsonData), "response from the transformResponse");
    },
  ],
});

const defaultHeaders = {
  Authorization: localStorage.getItem("token"),
};

fetch("url", { headers: { Authorization: localStorage.getItem("token") } });

fetch("url", {
  headers: defaultHeaders,
});

fetch("url", { method: "PATCH", headers: defaultHeaders });

axiosInstance.interceptors.request.use(
  (requestConfig) => {
    requestConfig.headers["Authorization"] = localStorage.getItem("token");
    requestConfig.headers["Content-Type"] = "application/json";

    console.log(requestConfig, "requestConfig");
    return requestConfig;
  },
  (err) => {
    console.log(err);
    return err;
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    console.log(res, "response from interceptor");
    if (res.status === 200) {
      alert("Status 200");
    }
    return res;
  },
  (err) => {
    console.log(err);
    return;
  }
);

axiosInstance
  .get("/users")
  .then((res) => console.log(res, "[GET] response from the instance"))
  .catch((err) => console.log(err, "[GET] response error"));

axiosInstance
  .post("/users", { id: 11, email: "email@gmail.com" })
  .then((res) => console.log(res, "[POST] response from the instance"))
  .catch((err) => console.log(err, "[POST] response error"));

// Звдання:
// Зробити PATCH, DELETE запити на ендпоінт /users використовуючи axiosInstance
