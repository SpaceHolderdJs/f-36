// HTML elements
const header = document.querySelector("#header");
const categoriesWrapper = document.querySelector("#categories");
const productsWrapper = document.querySelector("#products");

const nav = new HeaderComponent({}, header);
nav.render();

const renderProducts = (products) => {
  productsWrapper.innerHTML = "";

  products.forEach((product) =>
    new ProductCardComponent(product, productsWrapper).render()
  );
};

FakeStoreAPI.getProductCategories().then((categories) => {
  //H/W
  categories.push("all");

  categories.forEach((category) => {
    const categoryElement = document.createElement("button");
    categoryElement.className = "btn badge text-bg-primary";
    categoryElement.textContent = category;
    categoriesWrapper.appendChild(categoryElement);

    // H/W
    // Додати логіку для категорії "all"
    // Виводити всі товари, якщо ви обрали цю категорію
    // FakeStoreAPI.getProducstByCategory - товари за категорією
    // FakeStoreAPI.getAllProducts() - всі товари
    // Якщо категорія "all" - зробити запит на всі товари
    // Якщо категорія інша - продовжувати робити запит за категорією (уже є)

    // Підсвітити активну категорію кольором (bootstrap)

    categoryElement.onclick = async () => {
      const products = await FakeStoreAPI.getProducstByCategory(category);
      renderProducts(products);
    };
  });
});

FakeStoreAPI.getAllProducts().then((products) => {
  renderProducts(products);
});
