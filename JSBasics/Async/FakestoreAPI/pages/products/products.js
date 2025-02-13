// HTML elements
const header = document.querySelector("#header");
const categoriesWrapper = document.querySelector("#categories");
const productsWrapper = document.querySelector("#products");
const productsSortingSelect = document.querySelector("#products-sorting");

const nav = new HeaderComponent({}, header);
nav.render();

// Utils
const renderProducts = (products) => {
  productsWrapper.innerHTML = "";

  products.forEach((product) =>
    new ProductCardComponent(product, productsWrapper).render()
  );
};

const removeActiveCategory = () => {
  const allCategoryItems = [...document.querySelectorAll(".category-item")];

  allCategoryItems.forEach((item) => item.classList.remove("text-bg-success"));

  return allCategoryItems;
};

productsSortingSelect.onchange = async (event) => {
  const products = await FakeStoreAPI.getAllProducts(event.target.value);
  renderProducts(products);

  // Updating the category elements (state)
  const categoryElements = removeActiveCategory();
  const allCategoryElement = categoryElements.find(
    (element) => element.textContent === "all"
  );
  allCategoryElement.classList.add("text-bg-success");
};

FakeStoreAPI.getProductCategories().then((categories) => {
  //H/W
  categories.unshift("all");

  categories.forEach((category) => {
    const categoryElement = document.createElement("button");
    categoryElement.className = "category-item btn badge text-bg-primary";

    if (category === "all") {
      categoryElement.classList.add("text-bg-success");
    }

    categoryElement.textContent = category;
    categoriesWrapper.appendChild(categoryElement);

    categoryElement.onclick = async () => {
      const products =
        category === "all"
          ? await FakeStoreAPI.getAllProducts()
          : await FakeStoreAPI.getProductsByCategory(category);

      renderProducts(products);

      removeActiveCategory();

      categoryElement.classList.add("text-bg-success");
    };
  });
});

FakeStoreAPI.getAllProducts().then((products) => {
  renderProducts(products);
});
