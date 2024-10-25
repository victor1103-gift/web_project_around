import { popup } from "./utils.js";
export default class Card {
    constructor(name, link, templatePlace, handleClickImage){
        this._name = name;
        this._link = link;
        this._templatePlace = templatePlace;
        this._handleClickImage = handleClickImage;
    }

    //template
    _getTemplate(){
        const template = document.querySelector(this._templatePlace);
        const copyTemplateContent = template.content.querySelector(".element");
        this.nuevoPlace = copyTemplateContent.cloneNode(true);
        this.imageCard = this.nuevoPlace.querySelector(".element__image");
        this.cardTitle = this.nuevoPlace.querySelector(".element__text");
        this.imageCard.src = this._link;
        this.imageCard.alt = "Imagen de" + this._name;
        this.cardTitle.textContent = this._name;
        return this.nuevoPlace;

    }

    _setEventListeners(nuevoPlace) {
      this.handleRemove(nuevoPlace);
      this.handleLike(nuevoPlace);
      this.imageCard.addEventListener("click", ()=>{
        this._handleClickImage();
      })
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

    renderCard(){
      const node = this._getTemplate();
      this._setEventListeners(node);
      return this.nuevoPlace;
    }

}

