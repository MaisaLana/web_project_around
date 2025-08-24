const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__button-close");
const popupName = document.querySelector("#name");
const popupDescription = document.querySelector("#description");
const userName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__profession");
const formElement = document.querySelector(".popup__form");
const likes = document.querySelectorAll(".material-symbols-outlined")

function openPopup (){
popupName.value = userName.textContent;
popupDescription.value = userDescription.textContent;
popup.classList.remove('popup');
popup.classList.add('popup--active');
}

function closedPopup (){
popup.classList.add('popup');
popup.classList.remove('popup--active');
}

function handleProfileFormSubmit(evt){
evt.preventDefault();
userName.textContent = popupName.value;
userDescription.textContent = popupDescription.value;
closedPopup();
}

function liked(){
    likes.classList.add("material-symbols-rounded");
}

editButton.addEventListener("click", openPopup);
closePopup.addEventListener("click", closedPopup);
formElement.addEventListener("submit", handleProfileFormSubmit);
likes.addEventListener("click", liked)



