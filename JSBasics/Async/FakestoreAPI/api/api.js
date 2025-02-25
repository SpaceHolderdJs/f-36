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
    const response = await fetch(
      `https://fakestoreapi.com/carts/user/${userId}`
    );

    const carts = await response.json();

    return carts[0];
  };
}

FakeStoreAPI.instance.interceptors.request.use(
  (requestConfig) => {
    // H/W:
    // 1. Отримати токен (token) з localStorage
    // 2. Передати токен у headers за ключем Authorization
    // 3. Завершити запит
    // 4. Протестувати запити (GET, POST) на наявність у headers поля Authorization (має бути токен)
    // 5. Переписати метод getCartForUser на axios
    return requestConfig;
  },
  (err) => {
    console.log(err);
    return err;
  }
);
