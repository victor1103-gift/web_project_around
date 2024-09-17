export default class Popup{
    constructor (popup){
        this._popup = popup;
    }

    open(){
      open.addEventListener("click", () => {
        forms.classList.add("show");
        closeEsc();
      });

      edit.addEventListener("click", () => {
        links.classList.add("show");
        closeEsc();
      });

    }

    close(){
      closeButton.addEventListener("click", () => {
        forms.classList.remove("show");
      });
      
      closeLink.addEventListener("click", () => {
        links.classList.remove("show");
      });

        this._popup.querySelector(".popup__button").addEventListener("click", function () {
            this._popup.classList.remove("popup_show");
            closeEsc();
          });
        
        };
      

    _handleEscClose(){
      closeEsc() 
            document.addEventListener("keydown", function (evt) {
              if (evt.key === "Escape") {
                links.classList.remove("show");
                popup.classList.remove("popup_show");
                forms.classList.remove("show");
              }
            });
          
    }

    setEventListeners(popup){
        this._popup.addEventListener("click", function (evt) {
            if (
              evt.target.classList.contains("show") ||
              evt.target.classList.contains("popup_show")
            ) {
              links.classList.remove("show");
              popup.classList.remove("popup_show");
              forms.classList.remove("show");
            }
          });
    }
    }