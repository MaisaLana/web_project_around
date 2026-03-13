export function openPopup (openPopup){
openPopup.classList.remove('popup');
openPopup.classList.add('popup--active');
openPopup.removeAttribute("style","display:none")
}

export function closePopup (closePopup){
closePopup.classList.add('popup');
closePopup.classList.remove('popup--active');
closePopup.setAttribute("style","display:none")
}

export function setOverlayClose(popup){
    popup.addEventListener("click", (evt) => {
        if (evt.target === popup) {
            return closePopup(popup);
        }
    })
}

export function setEscClose (popup){
    document.addEventListener('keydown', (evt) => {
    if (evt.key === "Escape") {
      return closePopup(popup);
    }
});
}
