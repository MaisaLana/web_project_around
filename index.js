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
const imageLink = popupGallery.querySelector("#link_image");
const imageTitle = popupGallery.querySelector("#title_image");
const galleryForm = popupGallery.querySelector(".popup__form");
const galleryButton = popupGallery.querySelector(".popup__button");

//Gallery__Elements
const likes = document.querySelectorAll(".material-symbols-outlined");
const card = document.querySelector(".gallery");



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


//Gallery_likes
likes.forEach(like => {
like.addEventListener("click", () => {
like.classList.toggle("material-symbols-rounded");  
like.classList.toggle("material-symbols-outlined"); 
});
});

function addCard (title, link){
    const template = 
    document.querySelector("#gallery__template")
    .content.querySelector(".gallery__item");

    const cardElement = template.cloneNode(true);
    const cardTitle = cardElement.querySelector(".gallery__image-name");
    const cardLink = cardElement.querySelector(".gallery__image");

    cardTitle.textContent = title;
    cardLink.src = link;

    const likeButton = cardElement.querySelector(".material-symbols-outlined");
    likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("material-symbols-rounded");
    likeButton.classList.toggle("material-symbols-outlined");
  });

    card.prepend(cardElement);
}

function handlegalleryformsubmit(evt){
evt.preventDefault ();
addCard (imageTitle.value, imageLink.value);
closedpopup (popupGallery);
}

galleryForm.addEventListener("submit", handlegalleryformsubmit);