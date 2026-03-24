import popup from "./popup.js";

export default class popupWithImage extends popup {
    constructor(selector){
        super(selector);
        this._image = this._popup.querySelector(".popup__image-expand");
        this._name = this._popup.querySelector(".popup__image-footer");
    }

    open(name, link, alt){
    this._image.src = link;
    this._image.alt = alt;
    this._name.textContent = name;
     super.open();
    }
    
}