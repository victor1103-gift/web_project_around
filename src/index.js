import './pages/index.css';
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import Section from "./scripts/Section.js";
import Popup from "./scripts/popup/Popup.js";
import PopupWithForm from './scripts/popup/PopupWithForm.js'
import { popup, open, forms, profileInfo, formProfile,  
  closeButton, nameInput, jobInput, nameNode, jobNode, 
  links, closeLink, edit, placesArea, formPlace, 
  titlePlace, linkPlace, datos } from './scripts/utils.js';



/*open.addEventListener("click", () => {
  forms.classList.add("show");
  closeEsc();
});*/
//open.setEventListeners();


/*closeButton.addEventListener("click", () => {
  forms.classList.remove("show");
});*/

/*edit.addEventListener("click", () => {
  links.classList.add("show");
  closeEsc();
});*/

/*closeLink.addEventListener("click", () => {
  links.classList.remove("show");
});*/

formProfile.addEventListener("submit", (event) => {
  event.preventDefault();

  nameNode.textContent = nameInput.value;
  jobNode.textContent = jobInput.value;
  forms.classList.remove("show");
});

formPlace.addEventListener("submit", (event) => {
  event.preventDefault();

  const nuevoLugar = crearPlace({
    name: titlePlace.value,
    link: linkPlace.value,
  });

  links.classList.remove("show");
  placesArea.prepend(nuevoLugar);
});

/*datos.forEach(function (elemento) {
  const card = new Card(elemento.name, elemento.link, ".template-place");
  const nuevoLugar = card.renderCard();
  placesArea.prepend(nuevoLugar);
});
*/

const section = new Section(
  {
  items: datos, renderer: (elemento) =>{
  const card = crearPlace(elemento);
  return card;
},
},
".elements",
);
section.renderer();


/*clonar template*/
function crearPlace({ name, link }) {
  const card = new Card(name, link, ".template-place");
  const nuevoPlace = card.renderCard();
  return nuevoPlace;
}

//funcion cerrar popups
/*popup.querySelector(".popup__button").addEventListener("click", function () {
  popup.classList.remove("popup_show");
  closeEsc();
});*/

/*tecla de escape*/

/*function closeEsc() {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      links.classList.remove("show");
      popup.classList.remove("popup_show");
      forms.classList.remove("show");
    }
  });
}*/

/*document.addEventListener("click", function (evt) {
  if (
    evt.target.classList.contains("show") ||
    evt.target.classList.contains("popup_show")
  ) {
    links.classList.remove("show");
    popup.classList.remove("popup_show");
    forms.classList.remove("show");
  }
});*/

const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button__profile",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input-error_active",
  errorClass: "form__input_type-error",
};

const formValidatorProfile = new FormValidator(settings, formProfile);
formValidatorProfile.enableValidation();

const formValidatorAddPlace = new FormValidator(settings, formPlace);
formValidatorAddPlace.enableValidation();