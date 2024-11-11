import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this.link = this.popupElement.querySelector(".popup__image");
        this.name = this.popupElement.querySelector(".popup__text");
    }
    open(name, link) {
        super.open();
        this.name.textContent = name;
        this.link.src = link;
    }
}