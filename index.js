//Popups
const popupProfile = document.querySelector("#popup__profile");
const popupGallery = document.querySelector("#popup__gallery");

//buttons
const editbutton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closePopupProfile = popupProfile.querySelector(".popup__button-close");
const closePopupGallery = popupGallery.querySelector(".popup__button-close");


//Popup__Elements
const popupname = document.querySelector("#name");
const popupdescription = document.querySelector("#description");
const username = document.querySelector(".profile__name");
const userdescription = document.querySelector(".profile__profession");
const formelement = document.querySelector(".popup__form");
// const like = document.querySelector(".material-symbols-outlined"

//Function general
function openpopup (openPopup){
openPopup.classList.remove('popup');
openPopup.classList.add('popup--active');
}

function closedpopup (closedPopup){
closedPopup.classList.add('popup');
closedPopup.classList.remove('popup--active');
}

function handleprofileformsubmit(evt){
evt.preventDefault();
username.textContent = popupname.value;
userdescription.textContent = popupdescription.value;
closedpopup(popupProfile);
}

//profile
editbutton.addEventListener("click", () => {
popupname.value = username.textContent;
popupdescription.value = userdescription.textContent;
 openpopup(popupProfile)});

closePopupProfile.addEventListener("click", () => { closedpopup (popupProfile)
});
formelement.addEventListener("submit", handleprofileformsubmit);

//Gallery
addButton.addEventListener("click", () =>{ openpopup (popupGallery)
});
closePopupGallery.addEventListener("click", () => { closedpopup (popupGallery)
});



// function liked(){
//     like.classList.add("material-symbols-rounded");
// }

// like.addEventListener("click", liked)