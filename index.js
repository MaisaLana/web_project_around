const editbutton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closepopup = document.querySelector(".popup__button-close");
const popupname = document.querySelector("#name");
const popupdescription = document.querySelector("#description");
const username = document.querySelector(".profile__name");
const userdescription = document.querySelector(".profile__profession");
const formelement = document.querySelector(".popup__form");
const like = document.querySelector(".material-symbols-outlined")

function openpopup (){
popupname.value = username.textContent;
popupdescription.value = userdescription.textContent;
popup.classList.remove('popup');
popup.classList.add('popup--active');
}

function closedpopup (){
popup.classList.add('popup');
popup.classList.remove('popup--active');
}

function handleprofileformsubmit(evt){
evt.preventDefault();
username.textContent = popupname.value;
userdescription.textContent = popupdescription.value;
closedpopup();
}

function liked(){
    like.classList.add("material-symbols-rounded");
}

editbutton.addEventListener("click", openpopup);
closepopup.addEventListener("click", closedpopup);
formelement.addEventListener("submit", handleprofileformsubmit);
like.addEventListener("click", liked)


