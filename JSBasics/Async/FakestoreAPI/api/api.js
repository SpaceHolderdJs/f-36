class FakeStoreAPI {
  static getAllProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });

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

  static getProducstByCategory = async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );

    const products = await response.json();

    return products;
  };
}
