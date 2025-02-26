export default class Popup{
    constructor (popupSelector){
        this.popupElement = document.querySelector(popupSelector);
        this.closeButton = this.popupElement.querySelector(".form__button");
        this.handleEscClose = this.handleEscClose.bind(this);
    }

    open() {
      this.popupElement.classList.add("popup_show")
      document.addEventListener("keydown",this.handleEscClose)
    }

    close() {
      this.popupElement.classList.remove("popup_show")
      document.removeEventListener("keydown", this.handleEscClose)
    }

    handleEscClose(evt){
      if (evt.key === "Escape"){
        this.close()
      }
    }

    handleClickOutside(){
      return (evt.target.classList.contains("popup_show"))
    }

    setEventListeners() {
      this.closeButton.addEventListener("click", () => {
        this.close();
      } )
      this.popupElement.addEventListener("click", () => {
        if(this.handleClickOutside(evt)){
          this.close();
        }
      })
    }
}
