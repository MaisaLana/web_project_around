import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForms from "../components/PopupWithForms.js";
import Userinfo from "../components/UserInfo.js";
import { Api } from "../components/API.js";
import { ImgProfile } from "../components/ImgProfile.js";

const API = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "4d6c5a35-bd42-4b4d-bec8-cf5b5ab26f12",
    "Content-Type": "application/json"
  },
});



//instances
const validator = new FormValidator();
validator.enableValidation();

const profilePopup = new PopupWithForms("#popup__profile", (data) =>{
  userInfo.setUserInfo(data);
});
const galleryPopup = new PopupWithForms ("#popup__gallery", (data) =>{
  addCard(data["image-title"], data["image-link"]);
});


const imagePopup = new PopupWithImage ("#area");
const userInfo = new Userinfo ({
  name: ".profile__name",
  description: ".profile__profession"
});

// Promise.all([
//   API.getUserInfo(),
//   API.getInitialCards()
// ])
// .then(([userData, cards]) => {

//   console.log(userData);
//   console.log(cards);

// })
// .catch(err => console.log(err));



const section = new Section ({
  items: [
  { name: "Vale de Yosemite", link: "images/valeyousemite.jpg" },
  { name: "Lago Louise", link: "images/lagolouise.png" },
  { name: "Montanhas Care...", link: "images/montanhas.png" },
  { name: "Latemar", link: "images/latemar.png" },
  { name: "Parque Nacional...", link: "images/parquenacional.png" },
  { name: "Lago de Braies", link: "images/lagodebraies.png" }
], 
  renderer: (item) => {
    const card = new Card(item.name, item.link, "#gallery__template", openImagePopup);
    const cardElement = card.generateCard();
    section.addItem(cardElement);
    }
  },
  ".gallery"
);
  section.renderItems();


//buttons
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");



//Popup__Elements
const popupName = document.querySelector("#name");
const popupDescription = document.querySelector("#description");
const galleryForm = document.querySelector(".popup__form");

//Gallery__Elements
const likes = document.querySelectorAll(".material-symbols-outlined");
const card = document.querySelector(".gallery");

//Expandir imagem
function openImagePopup(title, link, alt){
  imagePopup.open(title, link, alt);
  imagePopup._handleEscClose();
}

//profile
editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();

  popupName.value = data.name;
  popupDescription.value = data.description;

  profilePopup.open();
});



//Gallery
addButton.addEventListener("click", () =>{ galleryForm.reset();
  galleryPopup.open();
});

// add image
function addCard (title, link){
    const cardInstance = new Card(title,link, "#gallery__template",openImagePopup);
    const cardElement = cardInstance.generateCard();
    card.prepend(cardElement);
  };



profilePopup.setEventListeners();
galleryPopup.setEventListeners();
imagePopup.setEventListeners();


//Botão de editar imagem
const imgProfileButton = document.querySelector(".profile__image-edit");

//Instancia a classe
const imgProfile = new ImgProfile(".profile__image");

//pega o link do fomulario e altera a imagem de perfil
const imgProfilePopup = new PopupWithForms("#popup__image-profile", (data) =>{
  imgProfile.editImage(data["image-link"]);
});


//faz o popup funcionar
imgProfileButton.addEventListener("click", () =>{
  imgProfilePopup.open();
})

imgProfilePopup.setEventListeners();