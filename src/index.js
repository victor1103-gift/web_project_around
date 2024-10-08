import './pages/index.css';
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import Section from "./scripts/Section.js";
import PopupWithImage from './scripts/popup/PopupWithImage.js';
import PopupWithForm from './scripts/popup/PopupWithForm.js'
import { popup, openEditButton, forms, formProfile,  
  closeButton,closeButtonPopup, nameInput, jobInput, nameNode, jobNode, 
  links, closeLink, editPlaceButton, placesArea, formPlace, 
  titlePlace, linkPlace, datos } from './scripts/utils.js';

<<<<<<< HEAD
const popupProfile = new PopupWithForm("#forms");
const popupEdit = new PopupWithForm("#links");
const popupImage = new PopupWithImage("#popup-cards");
console.log(popupImage);
console.log(popupProfile);
console.log(popupEdit);
openEditButton.addEventListener("click", () => {
  popupProfile.open();
});

editPlaceButton.addEventListener("click", () => {
=======
const profilePopup = new Popup("#forms");
const popupEdit = new Popup("#links");

//funcion cerrar popups
/*popup.querySelector(".popup__button").addEventListener("click", function () {
  popup.classList.remove("popup_show");
  closeEsc();
});*/

open.addEventListener("click", () => {
  profilePopup.open();
});

edit.addEventListener("click", () => {
>>>>>>> 3623b23b4c81dab43d080b9a496a8077c216d109
  popupEdit.open();
});

closeButton.addEventListener("click", () => {
<<<<<<< HEAD
  popupProfile.close();
});
closeButtonPopup.addEventListener("click", () => {
  popupImage.close();
=======
  profilePopup.close();
>>>>>>> 3623b23b4c81dab43d080b9a496a8077c216d109
});

closeLink.addEventListener("click", () => {
  popupEdit.close();
<<<<<<< HEAD
=======
});

closeButton.addEventListener("click", () => {
  profilePopup._handleEscClose();
>>>>>>> 3623b23b4c81dab43d080b9a496a8077c216d109
});


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
  const card = new Card(name, link, ".template-place",openPopup);
  const nuevoPlace = card.renderCard();
  return nuevoPlace;
}

function openPopup(){
  popupImage = new PopupWithImage();
  popupImage.open()
}

//datos.forEach(function(name, link){
  //const card = new Card(name, link, ()=>{
    //popupImage.open(name, link)
  //});
  //const nuevoPlace = card.renderCard();
 //return nuevoPlace;
//})
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