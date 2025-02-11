class ProductCardComponent extends Component {
  constructor(
    data = {
      id: 0,
      title: "",
      description: "",
      image: "",
      price: "",
      category: "",
      rating: {
        rate: 0,
        count: 0,
      },
    },
    parent
  ) {
    super(data, parent);
  }

  render() {
    this.parent.innerHTML += `<div class="card" style="width: 18rem;">
      <img src="${this.data.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${this.data.title}</h5>
        <p class="card-text">${this.data.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.data.price}</li>
        <li class="list-group-item">${this.data.category}</li>
      </ul>
    </div>`;
  }
}
