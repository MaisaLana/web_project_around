import { Card } from "../components/card.js";
import { FormValidator } from "../components/formValidator.js";
import Section from "../components/section.js";
import popupWithImage from "../components/popupWithImage.js";
import popupWithForms from "../components/popupWithForms.js";
import Userinfo from "../components/UserInfo.js";

//validação
const validator = new FormValidator();
validator.enableValidation();

//Popups
const popupProfile = document.querySelector("#popup__profile");
const popupGallery = document.querySelector("#popup__gallery");

//buttons
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closePopupProfile = popupProfile.querySelector(".popup__button-close");
const closePopupGallery = popupGallery.querySelector(".popup__button-close");

//Popup__Elements
const popupName = document.querySelector("#name");
const popupDescription = document.querySelector("#description");
const userName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__profession");
const formElement = document.querySelector(".popup__form");
const imageLink = popupGallery.querySelector("#image-link");
const imageTitle = popupGallery.querySelector("#image-title");
const galleryForm = popupGallery.querySelector(".popup__form");

//Gallery__Elements
const likes = document.querySelectorAll(".material-symbols-outlined");
const card = document.querySelector(".gallery");
const popupImage = document.querySelector(".popup--image");
const closePopupImage = popupImage.querySelector(".popup__image-close");
const galleryImages = card.querySelectorAll(".gallery__image");

//modern__constants
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

closePopupProfile.addEventListener("click", () => { profilePopup.close();
});

//Gallery
addButton.addEventListener("click", () =>{ galleryForm.reset();
  galleryPopup.open();
});

closePopupGallery.addEventListener("click", () => { galleryPopup.close()
});

//Gallery_likes
likes.forEach(like => {
  like.addEventListener("click", () => {
  like.classList.toggle("material-symbols-rounded");  
  like.classList.toggle("material-symbols-outlined"); 
});
});


// adicionar imagem 
function addCard (title, link){
    const cardInstance = new Card(title,link, "#gallery__template",openImagePopup);
    const cardElement = cardInstance.generateCard();
    card.prepend(cardElement);
  };

  const initialCards = [
  { name: "Vale de Yosemite", link: "images/valeyousemite.jpg" },
  { name: "Lago Louise", link: "images/lagolouise.png" },
  { name: "Montanhas Care...", link: "images/montanhas.png" },
  { name: "Latemar", link: "images/latemar.png" },
  { name: "Parque Nacional...", link: "images/parquenacional.png" },
  { name: "Lago de Braies", link: "images/lagodebraies.png" }
];

function handlegalleryformsubmit(evt){
evt.preventDefault ();
addCard (imageTitle.value, imageLink.value);
galleryPopup.close();
}


closePopupImage.addEventListener("click", () => {
imagePopup.close();
});


const section = new Section ({
  items: initialCards, 
  renderer: (item) => {
    const card = new Card(item.name, item.link, "#gallery__template", openImagePopup);
    const cardElement = card.generateCard();
    section.addItem(cardElement);
    }
  },
  ".gallery"
);
  section.renderItems();
  



profilePopup.setEventListeners();
galleryPopup.setEventListeners();
imagePopup.setEventListeners();

