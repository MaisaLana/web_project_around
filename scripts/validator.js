
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".popup__form"));
    formList.forEach ((formElement) => {
        setEventListeners (formElement);
});
};

const setEventListeners = (formElement)  => {
    const inputList = Array.from(formElement.querySelectorAll(".popup__item"));
    const buttonElement = formElement.querySelector(".popup__button");
    inputList.forEach((inputElement) => {
        inputElement.addEventListener ("input", (evt) => {
            isValid(formElement, inputElement);
            toggleButtonState (inputList, buttonElement);
        });
    });
};


const isValid = (formElement, inputElement) => {
   if (!inputElement.validity.valid) {
    const errorMessage = inputElement.validationMessage;
     showInputError(formElement, inputElement, errorMessage);
} else {
    hideInputError (formElement, inputElement);
};
};

const showInputError = (formElement, inputElement, errorMessage) => {
    const spanElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
    inputElement.classList.add("popup__item-error");
    spanElement.textContent = errorMessage;
    spanElement.classList.add("popup__item-error-message");
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    }
);
};

const toggleButtonState = (inputList, buttonElement) => {
if(hasInvalidInput(inputList)){
    buttonElement.classList.add("popup__button-error");
    buttonElement.disabled = true;
} else {
    buttonElement.classList.remove("popup__button-error");
    buttonElement.disabled = false;
};
};

const hideInputError = (formElement, inputElement) => {
    const spanElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
    inputElement.classList.remove("popup__item-error");
    spanElement.textContent = "";
    spanElement.classList.remove("popup__item-error-message");
};

enableValidation();