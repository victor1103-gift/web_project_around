export default class Popup{
    constructor (popup){
        this._popupElement = document.querySelector(popup);
        this._handleEscClose = this._handleEscClose.bind(this);

    }

    open() {
      this._popupElement.classList.add("show");
      document.addEventListener("click",  
        this._handleEscClose);
    }

    close() {
      this._popupElement.classList.remove("show");

    }

    _handleEscClose(evt){

     
    }

    _setEventListeners () {
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