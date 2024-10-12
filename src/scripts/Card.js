import { popup } from "./utils.js";
export default class Card {
    constructor(name, link, templatePlace){
        this._name = name;
        this._link = link;
        this._templatePlace = templatePlace;
        
    }

    //template
    _getTemplate(){
        const template = document.querySelector(this._templatePlace);
        const copyTemplateContent = template.content.querySelector(".element");
        const nuevoPlace = copyTemplateContent.cloneNode(true);
        
        nuevoPlace.querySelector(".element__image").src = this._link;
        nuevoPlace.querySelector(".element__image").alt = "Imagen de" + this._name;
        nuevoPlace.querySelector(".element__text").textContent = this._name;

        return nuevoPlace;

    }

    _setEventListeners(nuevoPlace) {
      this.handleRemove(nuevoPlace);
      this.handleLike(nuevoPlace);
      nuevoPlace.querySelector(".element__image").addEventListener("click", function (event) {
            popup.classList.add("popup_show");
            popup.querySelector(".popup__image").src = event.target.src;
          });
          nuevoPlace.querySelector(".element__text").addEventListener("click", function (event) {
            popup.classList.add("popup_show");
            popup.querySelector(".popup__text").textContent = event.target.textContent;
          });
    }

    handleLike(nuevoPlace){
        //boton de like
        nuevoPlace
          .querySelector(".element__button-trs")
          .addEventListener("click", function (evt) {
            evt.target.classList.toggle("element__trash_active");
          });
    }

    handleRemove(nuevoPlace){
        //remover tarjeta
        nuevoPlace
          .querySelector(".element__button--vector")
          .addEventListener("click", function () {
            nuevoPlace.remove();
          });
    }

    renderCard(handleClickImage){
      this._handleClickImage = handleClickImage;
      const node = this._getTemplate();
      this._setEventListeners(node);
      return node;

    }

}

