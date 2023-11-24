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
const popup = document.querySelector(".popup");
const formPlace = document.querySelector("#form_place");
const titlePlace = document.querySelector("#title_place");
const linkPlace = document.querySelector("#link_place");
const datos = [
  {
    titulo: "Valle de Yosemite",
    image: (src = "./images/kirill-pershin-1088404-unsplash.jpg"),
  },
  {
    titulo: "Montañas Calvas",
    image: (src = "./images/kirill-pershinthree-1556355-unsplash.png"),
  },
  {
    titulo: "Lago Louis",
    image: (src = "./images/lagolouis.jpg"),
  },
  {
    titulo: "Central Park",
    image: (src = "./images/central-park-nueva-york.jpg"),
  },
  {
    titulo: "Gran Cañon",
    image: (src = "./images/el-grancañon.jpg"),
  },
  {
    titulo: "Islas Galapagos",
    image: (src = "./images/pelicano.jpg"),
  },
];

datos.forEach(function (elemento) {
  const nuevoLugar = crearPlace(elemento);
  placesArea.prepend(nuevoLugar);
});

open.addEventListener("click", () => {
  forms.classList.add("show");
});

closeButton.addEventListener("click", () => {
  forms.classList.remove("show");
});

edit.addEventListener("click", () => {
  links.classList.add("show");
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
    titulo: titlePlace.value,
    image: linkPlace.value,
  });

  links.classList.remove("show");
  placesArea.prepend(nuevoLugar);
});

/*clonar template*/
function crearPlace({ titulo, image }) {
  const template = document.querySelector(".template-place");
  const copyTemplateContent = template.content.querySelector(".element");
  const nuevoPlace = copyTemplateContent.cloneNode(true);

  nuevoPlace.querySelector(".element__image").src = image;
  nuevoPlace.querySelector(".element__text").textContent = titulo;

  nuevoPlace
    .querySelector(".element__button--vector")
    .addEventListener("click", function () {
      nuevoPlace.remove();
    });

  nuevoPlace
    .querySelector(".element__image")
    .addEventListener("click", function (event) {
      popup.classList.add("popup_show");
      popup.querySelector(".popup__image").src = event.target.src;
    });

  nuevoPlace
    .querySelector(".element__button-trs")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__trash_active");
    });

  return nuevoPlace;
}

popup.querySelector(".popup__button").addEventListener("click", function () {
  popup.classList.remove("popup_show");
});

document.addEventListener("keydown", function (evt) {
  console.log(evt.key);
  if (evt.key === "Escape") {
    links.classList.remove("show");
    popup.classList.remove("popup_show");
    forms.classList.remove("show");
  }
});

document.addEventListener("click", function (evt) {
  console.log(evt.key);
  if (
    evt.target.classList.contains("show") ||
    evt.target.classList.contains("popup_show")
  ) {
    links.classList.remove("show");
    popup.classList.remove("popup_show");
    forms.classList.remove("show");
  }
});

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  console.log("Validez del input ->", inputElement.validity.valid);
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log("input erroneo", hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".button__profile");
  //buttonelement es el boton que envia//
  // aquí, para comprobar el estado del botón al principio
  console.log("inputList ->", inputList);
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      // y aquí, para comprobarlo cada vez que haya cambios en la entrada de algún campo
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  console.log("formList ->", formList);
  formList.forEach((formElement) => {
    setEventListeners(formElement);
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
  });
};

enableValidation();
