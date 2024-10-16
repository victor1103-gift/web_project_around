import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this.link = this._popupElement.querySelector(".popup__image");
        this.name = this._popupElement.querySelector(".popup__text");
    }
    open(name, link) {
        super.open();
        super._handleOpenPopup();
        this.titleElement.textContent = name;
        this.imageElement.src = link;
    }
    
}