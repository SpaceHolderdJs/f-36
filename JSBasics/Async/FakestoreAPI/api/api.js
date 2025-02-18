class FakeStoreAPI {
  static headers = {
    "content-type": "application/json",
  };

  static getAllProducts = async (sort = "") => {
    const response = await fetch(
      `https://fakestoreapi.com/products?sort=${sort}`,
      {
        method: "GET",
      }
    );

    const products = await response.json();

    return products;
  };

  static getProductCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories",
      { method: "GET" }
    );

    const categories = await response.json();

    return categories;
  };

  static getProductsByCategory = async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );

    const products = await response.json();

    return products;
  };

  static login = async (loginData) => {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: FakeStoreAPI.headers,
    });

    const payload = await response.json();

    return payload;
  };

  static getCartForUser = async (userId) => {
    const response = await fetch(
      `https://fakestoreapi.com/carts/user/${userId}`
    );

    const carts = await response.json();

    return carts[0];
  };
}
