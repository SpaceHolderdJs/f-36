class FakeStoreAPI {
  static instance = axios.create({ baseURL: "https://fakestoreapi.com" });

  static getAllProducts = async (sort = "") => {
    const { data } = await FakeStoreAPI.instance.get(`/products?sort=${sort}`);
    return data;
  };

  static getProductCategories = async () => {
    const { data } = await FakeStoreAPI.instance.get("/products/categories");
    return data;
  };

  static getProductsByCategory = async (category) => {
    const { data } = await FakeStoreAPI.instance.get(
      `products/category/${category}`
    );
    return data;
  };

  static login = async (loginData) => {
    const { data } = await FakeStoreAPI.instance.post("/auth/login", loginData);
    return data;
  };

  static getCartForUser = async (userId) => {
    const { data: carts } = await FakeStoreAPI.instance.get(
      `/carts/user/${userId}`
    );

    return carts[0];
  };
}

FakeStoreAPI.instance.interceptors.request.use(
  (requestConfig) => {
    const accessToken = localStorage.getItem("token");
    requestConfig.headers["Authorization"] = `Bearer ${accessToken}`;
    ("Set-Cookie");

    // H/W
    // Підключити бібліотеку https://www.jsdelivr.com/package/npm/js-cookie (login.html)
    // Отримати токен з cookie використовуючи бібліотеку
    // Записати токен у header Set-Cookie (key=value)

    return requestConfig;
  },
  (err) => {
    console.log(err);
    return err;
  }
);
