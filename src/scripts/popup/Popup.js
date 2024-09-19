export default class Popup{
    constructor (popup){
        this._popup = popup;
    }

    open() {
      const popup = document.querySelector(this._popup)
      popup.classList.add("show");
    }

    close() {
      const popup = document.querySelector(this._popup)
      popup.classList.remove("show");
    }

    _handleEscClose(){
      const closeEsc = document.querySelector(this._popup)
      closeEsc.classList.remove("show", "popup_show");
    }
    }