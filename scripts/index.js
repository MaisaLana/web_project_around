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
const imageLink = popupGallery.querySelector("#link_image");
const imageTitle = popupGallery.querySelector("#title_image");
const galleryForm = popupGallery.querySelector(".popup__form");
const galleryButton = popupGallery.querySelector(".popup__button");

//Gallery__Elements
const likes = document.querySelectorAll(".material-symbols-outlined");
const card = document.querySelector(".gallery");
const popupImage = document.querySelector(".popup--image");
const closePopupImage = popupImage.querySelector(".popup__image-close");
const galleryImages = card.querySelectorAll(".gallery__image");


//Function general
function openedPopup (openPopup){
openPopup.classList.remove('popup');
openPopup.classList.add('popup--active');
}

function closedPopup (closePopup){
closePopup.classList.add('popup');
closePopup.classList.remove('popup--active');
}

function handleProfileFormSubmit(evt){
evt.preventDefault();
userName.textContent = popupName.value;
userDescription.textContent = popupDescription.value;
closedPopup(popupProfile);
}


//profile
editButton.addEventListener("click", () => {
popupName.value = userName.textContent;
popupDescription.value = userDescription.textContent;
 openedPopup(popupProfile)});

closePopupProfile.addEventListener("click", () => { closedPopup (popupProfile)
});
formElement.addEventListener("submit", handleProfileFormSubmit);

//Gallery
addButton.addEventListener("click", () =>{ openedPopup (popupGallery)
});
closePopupGallery.addEventListener("click", () => { closedPopup (popupGallery)
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
    const template = 
    document.querySelector("#gallery__template")
    .content.querySelector(".gallery__item");

    const cardElement = template.cloneNode(true);
    const cardTitle = cardElement.querySelector(".gallery__image-name");
    const cardLink = cardElement.querySelector(".gallery__image");

    cardTitle.textContent = title;
    cardLink.src = link;

    const trashButton = cardElement.querySelector(".delete.material-symbols-rounded");
    trashButton.addEventListener("click", () => {     
    trashButton.closest(".gallery__item").classList.toggle("hidden");
   });

    const likeButton = cardElement.querySelector(".material-symbols-outlined");
    likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("material-symbols-rounded");
    likeButton.classList.toggle("material-symbols-outlined");

  });

  
    cardLink.addEventListener("click", () => {
    const popupImg = document.querySelector(".popup__image-expand");
    const imageFooter = document.querySelector(".popup__image-footer");

    popupImg.src = cardLink.src;
    imageFooter.textContent = cardTitle.textContent;

    popupImage.style.display = "flex"; 
  });

    card.prepend(cardElement);
}

function handlegalleryformsubmit(evt){
evt.preventDefault ();
addCard (imageTitle.value, imageLink.value);
closedPopup (popupGallery);
}

galleryForm.addEventListener("submit", handlegalleryformsubmit);



//Delete image
const trashs = document.querySelectorAll(".delete.material-symbols-rounded");
trashs.forEach(trash => {
    trash.addEventListener("click", () => {     
    trash.closest(".gallery__item").classList.toggle("hidden");


});
})

//expandir image

const popupImg = document.querySelector(".popup__image-expand");
galleryImages.forEach(galleryImage => {
  galleryImage.addEventListener("click", () => {
    const imageName = galleryImage.closest(".gallery__item").querySelector(".gallery__image-name").textContent;
    const imageFooter = document.querySelector(".popup__image-footer");
    popupImg.src = galleryImage.src;
    popupImg.alt = galleryImage.alt;
    imageFooter.textContent = imageName;

    popupImage.setAttribute("style","display: flex");
  });
});

closePopupImage.addEventListener("click", () => {popupImage.setAttribute("style","display: none")});
