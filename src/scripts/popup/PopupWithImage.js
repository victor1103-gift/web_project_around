import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this.imageElement = this._popupElement.querySelector(".popup__image");
        this.titleElement = this._popupElement.querySelector(".popup__image-title");
    }
    open(name, link) {
        super.open();
        this.titleElement.textContent = name;
        this.imageElement.src = link;
    }
}