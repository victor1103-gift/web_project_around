const open = document.getElementById("open");
const forms = document.getElementById("forms");
const profileInfo = document.getElementById("profile-info");
const formProfile = document.getElementById("form_profile");
const closeButton = formProfile.querySelector(".form__button");
const nameInput = formProfile.querySelector(".form__title");
const jobInput = formProfile.querySelector(".form__link");
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
