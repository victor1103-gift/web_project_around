export default class Popup{
    constructor (popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._closeButton = this._popupElement.querySelector(".form__button");
        this._closeButtonPopup = this._popupElement.querySelector(".popup__button");
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
      this._popupElement.classList.add("popup_show");
      document.addEventListener("keydown",this._handleEscClose)
    }

    close() {
      this._closeButton.classList.remove("popup_show");
      document.removeEventListener("keydown", this._handleEscClose)
    }

    _handleEscClose(evt){
      if (evt.key === "Escape"){
        this.close(evt)
      }
    }

    _handleClickOutside(){
      return (evt.target.classList.contains("show"))
    }

    _setEventListeners() {
      
      this._closeButton.addEventListener("click", () => {
        this.close();
      })
      this._closeButtonPopup.addEventListener("click", () => {
        this.close();
      })

        /*  if (
        evt.target.classList.contains("show") ||
        evt.target.classList.contains("popup_show")
      ) {
        this.close()
      }*/

      this._popupElement.addEventListener("click",  (evt)=>{
        if(this._handleClickOutside(evt)){
          this.close();
        }
      })
    }
}
