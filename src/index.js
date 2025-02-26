import './pages/index.css';
import Popup from './scripts/popup/Popup.js';
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import Section from "./scripts/Section.js";
import { openPopupEdit, forms, formProfile,  
  closeButton, nameInput, jobInput, nameNode, jobNode, 
  links, openPopup, placesArea, formPlace, 
  titlePlace, linkPlace, datos } from './scripts/utils.js';

const popupProfile = new Popup("#forms");
console.log(popupProfile);
popupProfile.setEventListeners();

const popupEdit = new Popup("#links");
console.log(popupEdit);
popupEdit.setEventListeners();

const popupImage = new Popup("#popup-cards");
console.log(popupImage);

openPopupEdit.addEventListener("click", () => {
  popupEdit.open()
})

openPopup.addEventListener("click", () => {
  popupProfile.open()
})




formPlace.addEventListener("submit", (event) => {
  event.preventDefault();

  const nuevoLugar = crearPlace({
    name: titlePlace.value,
    link: linkPlace.value,
  });

  links.classList.remove("show");
  placesArea.prepend(nuevoLugar);
});

formProfile.addEventListener("submit", (event) => {
  event.preventDefault();
  nameNode.textContent = nameInput.value;
  jobNode.textContent = jobInput.value;
  forms.classList.remove("show");
});

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
  const card = new Card(name, link, ".template-place", ()=>{
    popupImage.open(name, link);
  })
  const nuevoPlace = card.renderCard()
  return nuevoPlace;
}

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