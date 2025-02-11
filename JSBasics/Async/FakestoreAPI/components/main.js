class Component {
  constructor(data = {}, parent = document.body) {
    this.data = data;
    this.parent = parent;
  }

  render() {
    return this.parent.appendChild(`<div>Render of the component</div>`);
  }
}
