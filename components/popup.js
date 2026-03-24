export default class popup {
    constructor(selector){
        this._popup = document.querySelector(selector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
this._popup.classList.remove('popup');
this._popup.classList.add('popup--active');
this._popup.removeAttribute("style","display:none");

document.addEventListener("keydown", this._handleEscClose);
}

close(){
this._popup.classList.add('popup');
this._popup.classList.remove('popup--active');
this._popup.setAttribute("style","display:none");

document.removeEventListener("keydown", this._handleEscClose);
}

_handleEscClose(evt){
  if (evt.key === "Escape") {
    this.close();
  }
}

setEventListeners(){
this._popup.addEventListener("click", (evt) => {
    if (evt.target === this._popup){
     this.close();
    }
})
}
}