class CartComponent extends Component {
  deleteCartItem() {
    // TODO: H/W
  }

  async prepareCartItemsLayout() {
    // TODO: Add here a logic to detect a user
    const userID = localStorage.getItem("userID");

    const cart = await FakeStoreAPI.getCartForUser(userID);
    const products = await FakeStoreAPI.getAllProducts();

    let layout = "";
    this.data.totalPrice = 0;
    this.data.totalItems = 0;

    cart.products.forEach(({ productId, quantity }) => {
      const product = products.find((p) => p.id === productId);

      this.data.totalPrice += quantity * product.price;
      this.data.totalItems += quantity;

      layout += `
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${
                product.image
              }" class="img-fluid rounded-start" alt="${product.title}" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">
                 ${product.description}
                </p>
                <p>
                 Quantity: <span class="badge text-bg-primary">${quantity}</span>
                </p>
                <p class="card-text">
                 Price: <b>${product.price * quantity}$</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    return layout;
  }

  async render() {
    const productsLayout = await this.prepareCartItemsLayout();

    this.parent.innerHTML += `
    <button class="btn btn-primary position-relative"
     type="button" 
     data-bs-toggle="offcanvas"
     data-bs-target="#cart-offcanvas" 
     aria-controls="cart-offcanvas">
        Open cart
        <span class="badge rounded-pill bg-danger position-absolute translate-middle start-100">${this.data.totalItems}</span>
    </button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="cart-offcanvas" aria-labelledby="cart-offcanvasLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="cart-offcanvasLabel">Cart</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
       ${productsLayout}
    </div>

    <div class="offcanvas-footer p-3">
        <h5>Total price: <b>${this.data.totalPrice}$</b></h5>
    </div>
    </div
    `;
  }
}

// 1. Додати кнопку видалення до елементів корзини (js, frontend),
//  Додати deleteItem як метод до корзини
// 2. Стилізувати (все)
