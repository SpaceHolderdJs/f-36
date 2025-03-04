class FakeStoreAPI {
  static baseURL = "https://fakestoreapi.com";

  static async fetchWithAuth(endpoint, options = {}) {
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    const accessToken = "";
    if (accessToken) {
      defaultOptions.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    const response = await fetch(`${this.baseURL}${endpoint}`, defaultOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  }

  static async getAllProducts(sort = "") {
    return await this.fetchWithAuth(`/products?sort=${sort}`);
  }

  static async getProductCategories() {
    return await this.fetchWithAuth("/products/categories");
  }

  static async getProductsByCategory(category) {
    return await this.fetchWithAuth(`/products/category/${category}`);
  }

  static async login(loginData) {
    return await this.fetchWithAuth("/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });
  }

  static async getCartForUser(userId) {
    const carts = await this.fetchWithAuth(`/carts/user/${userId}`);
    return carts[0];
  }
}

test("[Positive] Login", async () => {
  const loginCorrectData = {
    username: "mor_2314",
    password: "83r5^_",
  };

  const payload = await FakeStoreAPI.login(loginCorrectData);

  expect(typeof payload.token).toBe("string");
  expect(payload.token.length > 20).toBe(true);
});

test("[Negative] Login", async () => {
  const loginIncorrectData = {
    username: "test name",
    password: "83r5^_",
  };

  try {
    await FakeStoreAPI.login(loginIncorrectData);
  } catch (err) {
    console.log(err, "err");
    expect(err).not.toBeFalsy();
  }
});

// H/W
// Додати тести (негативні та позитивні) для функцій
// - getAllProducts (масив, довжина)
// - getProductCategories (масив, містить категорію jewerly)
// - getCartForUser (масив, наявність поля products (масив))
// перевірити командою npm run test
