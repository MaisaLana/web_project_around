import { Card } from "../components/card.js";
import { FormValidator } from "../components/formValidator.js";
import Section from "../components/section.js";
import popupWithImage from "../components/popupWithImage.js";
import popupWithForms from "../components/popupWithForms.js";
import Userinfo from "../components/UserInfo.js";

//instances
const validator = new FormValidator();
validator.enableValidation();

const profilePopup = new popupWithForms("#popup__profile", (data) =>{
  userInfo.setUserInfo(data);
});
const galleryPopup = new popupWithForms ("#popup__gallery", (data) =>{
  addCard(data["image-title"], data["image-link"]);
});

const imagePopup = new popupWithImage ("#area");
const userInfo = new Userinfo ({
  name: ".profile__name",
  description: ".profile__profession"
});

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

