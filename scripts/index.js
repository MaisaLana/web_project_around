//popup
const popupProfile = document.querySelector("#popup__profile");
const popupGallery = document.querySelector("#popup__gallery");

// button
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closePopupProfile = popupProfile.querySelector(".popup__button-close");
const closePopupGallery = popupGallery.querySelector(".popup__button-close");

//popup-elements
const popupName = document.querySelector("#name");
const popupDescription = document.querySelector("#description");
const userName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__profession");
const formElement = popupProfile.querySelector(".popup__form");

//gallery
const likes = document.querySelectorAll(".material-symbols-outlined");


// generical function
function openPopup (openPopup) {
openPopup.classList.remove('popup');
openPopup.classList.add('popup--active');
}

function closedPopup (closedPopup){
closedPopup.classList.add('popup');
closedPopup.classList.remove('popup--active');
}

function handleProfileFormSubmit(evt){
evt.preventDefault();
userName.textContent = popupName.value;
userDescription.textContent = popupDescription.value;
closedPopup(popupProfile);
}

// Profile function
editButton.addEventListener("click", () => {
popupName.value = userName.textContent;
popupDescription.value = userDescription.textContent;
openPopup(popupProfile);
});
closePopupProfile.addEventListener("click", () => { closedPopup(popupProfile)});
formElement.addEventListener("submit", handleProfileFormSubmit);

//Gallery function
addButton.addEventListener("click", () => {openPopup(popupGallery)});
closePopupGallery.addEventListener("click", () => { closedPopup(popupGallery)});

//function like(){
//    likes.classList.add("material-symbols-rounded");
//}
// likes.addEventListener("click", liked)

//fazer commit