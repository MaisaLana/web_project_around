export class Card {
  constructor(title, link, templateSelector, handleCardClick) {
    this._title = title;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".gallery__item")
      .cloneNode(true);

    return cardElement;
  }

  _handleLike(evt) {
    evt.target.classList.toggle("material-symbols-rounded");
    evt.target.classList.toggle("material-symbols-outlined");
  }

  _handleDelete(evt) {
    evt.target.closest(".gallery__item").classList.toggle("hidden");
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".material-symbols-outlined");
    const trashButton = this._element.querySelector(".delete.material-symbols-rounded");
    const cardImage = this._element.querySelector(".gallery__image");

    likeButton.addEventListener("click", (evt) => this._handleLike(evt));
    trashButton.addEventListener("click", (evt) => this._handleDelete(evt));
    cardImage.addEventListener("click", () => { 
      this._handleCardClick(this._title, this._link);
});
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardTitle = this._element.querySelector(".gallery__image-name");
    const cardImage = this._element.querySelector(".gallery__image");
    

    cardTitle.textContent = this._title;
    cardImage.src = this._link;

    this._setEventListeners();

    return this._element;
  }
}