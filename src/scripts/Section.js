export default class Section {
  constructor({ items, renderer }, templatePlace) {
    this._items = items;
    this._renderer = renderer;
    this._templatePlace = document.querySelector(templatePlace);
  }

  renderer() {
    this._items.forEach((elemento) => {
      const node = this._renderer(elemento);
      this.addItem(node);
    });
  }
  addItem(elements) {
    this._templatePlace.append(elements);
  }
}
