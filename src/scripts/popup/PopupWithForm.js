import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector){
        super(popupSelector)
    }
    
    _getInputValues() {
        
    }
    _setEventListeners(){
        formPlace.addEventListener("submit", (event) => {
            event.preventDefault();
          
            const nuevoLugar = crearPlace({
              name: titlePlace.value,
              link: linkPlace.value,
            });
          
            links.classList.remove("show");
            placesArea.prepend(nuevoLugar);
          });
    }
}