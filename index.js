import Card from "./Card.js";
import { popup } from "./utils.js";
import FormValidator from "./FormValidator.js";
const open = document.getElementById("open");
const forms = document.getElementById("forms");
const profileInfo = document.getElementById("profile-info");
const formProfile = document.getElementById("form_profile");
const closeButton = formProfile.querySelector(".form__button");
const nameInput = formProfile.querySelector("#nombre");
const jobInput = formProfile.querySelector("#ocupacion");
const nameNode = profileInfo.querySelector(".profile__jacques");
const jobNode = profileInfo.querySelector(".profile__explorador");
const links = document.getElementById("links");
const closeLink = links.querySelector(".form__button");
const edit = document.getElementById("edit");
const placesArea = document.querySelector(".elements");
const formPlace = document.querySelector("#form_place");
const titlePlace = document.querySelector("#title-place");
const linkPlace = document.querySelector("#link-place");
const datos = [
  {
    name: "Valle de Yosemite",
    link: "./images/kirill-pershin-1088404-unsplash.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "./images/kirill-pershinthree-1556355-unsplash.png",
  },
  {
    name: "Lago Louis",
    link: "./images/lagolouis.jpg",
  },
  {
    name: "Central Park",
    link: "./images/central-park-nueva-york.jpg",
  },
  {
    name: "Gran Cañon",
    link: "./images/el-grancañon.jpg",
  },
  {
    name: "Islas Galapagos",
    link: "./images/pelicano.jpg",
  },
];


open.addEventListener("click", () => {
  forms.classList.add("show");
  closeEsc();
});

closeButton.addEventListener("click", () => {
  forms.classList.remove("show");
});

edit.addEventListener("click", () => {
  links.classList.add("show");
  closeEsc();
});

closeLink.addEventListener("click", () => {
  links.classList.remove("show");
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

datos.forEach(function (elemento) {
  //const nuevoLugar = crearPlace(elemento);
  const card = new Card(elemento.name, elemento.link, ".template-place");
  const nuevoLugar = card.renderCard();
  placesArea.prepend(nuevoLugar);
});



/*clonar template*/
function crearPlace({ name, link }) {
  const card = new Card(name, link, ".template-place");
  const nuevoPlace = card.renderCard();
  return nuevoPlace;
}

//funcion cerrar popups
popup.querySelector(".popup__button").addEventListener("click", function () {
  popup.classList.remove("popup_show");
  closeEsc();
});

/*tecla de escape*/

function closeEsc() {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      links.classList.remove("show");
      popup.classList.remove("popup_show");
      forms.classList.remove("show");
    }
  });
}

document.addEventListener("click", function (evt) {
  if (
    evt.target.classList.contains("show") ||
    evt.target.classList.contains("popup_show")
  ) {
    links.classList.remove("show");
    popup.classList.remove("popup_show");
    forms.classList.remove("show");
  }
});

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