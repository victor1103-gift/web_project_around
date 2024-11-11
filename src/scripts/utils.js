export const popup = document.querySelector(".popup");

export const openEditButton = document.getElementById("open");
export const forms = document.getElementById("forms");
export const profileInfo = document.getElementById("profile-info"); 
export const formProfile = document.getElementById("form_profile");
export const closeButton = document.querySelector("#close");
export const nameInput = formProfile.querySelector("#nombre");
export const jobInput = formProfile.querySelector("#ocupacion");
export const nameNode = profileInfo.querySelector(".profile__jacques");
export const jobNode = profileInfo.querySelector(".profile__explorador");
export const links = document.getElementById("links");
export const editPlaceButton = document.getElementById("edit");
export const placesArea = document.querySelector(".elements");
export const formPlace = document.querySelector("#form_place");
export const titlePlace = document.querySelector("#title-place");
export const linkPlace = document.querySelector("#link-place");
export const datos = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];