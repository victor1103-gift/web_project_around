export default class Popup{
<<<<<<< HEAD
    constructor (popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._closeButton = this._popupElement.querySelector(".form__button");
        this._closeButtonPopup = this._popupElement.querySelector(".popup__button");
=======
    constructor (popup){
        this._popupElement = document.querySelector(popup);
        this._closeButton = this._popupElement.querySelector("#close");
>>>>>>> 3623b23b4c81dab43d080b9a496a8077c216d109
        this._handleEscClose = this._handleEscClose.bind(this);

    }

    open() {
      this._popupElement.classList.add("show");
<<<<<<< HEAD
      document.addEventListener("keydown",this._handleEscClose)
    }

    close() {
      this._popupElement.classList.remove("show",);
      this._popupElement.classList.remove("popup_show",);
=======
      document.addEventListener("keydown", this._handleEscClose)
    }

    close() {
      this._popupElement.classList.remove("show");
>>>>>>> 3623b23b4c81dab43d080b9a496a8077c216d109
      document.removeEventListener("keydown", this._handleEscClose)
    }

    _handleEscClose(evt){
      if (evt.key === "Escape"){
<<<<<<< HEAD
        this.close(evt)
=======
        this.close();
>>>>>>> 3623b23b4c81dab43d080b9a496a8077c216d109
      }
    }

    _setEventListeners () {
      
      this._closeButton.addEventListener("click", () => {
        this.close();
      })
      this._closeButtonPopup.addEventListener("click", () => {
        this.close();
      })

      if (
        evt.target.classList.contains("show") ||
        evt.target.classList.contains("popup_show")
      ) {
        this.close()
      }

      this._popupElement.querySelector(".form__button").addEventListener("click",  ()=>{
        this.close();
      })
    }
    }