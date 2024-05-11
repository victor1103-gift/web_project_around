export default class FormValidator {
constructor(config, inputElement){
    this._formProfile = config.formProfile;
    this._formPlace = config.formPlace;
    this._formInput = config.formInput;
    this._formInputContainer = formInputContainer;
    this._buttonInactive = config._buttonInactive;
    this._errorElement = config.errorElement;
    this._errorMessage = config.errorMessage;

    this._inputElement = inputElement;
    
}


_showInputError(errorElement) {
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
  };
}

_hideInputError(errorElement) {
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
  };
}

_chekInputValidity() {
  
    if (!this._inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        settings
      );
    } else {
      this._hideInputError(formElement, inputElement, settings);
    }
}

_hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });

}


_toggleButtonState(inputList, buttonElement) {
  const toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._buttonInactive);
    } else {
      buttonElement.classList.remove(this._buttonInactive);
    }
  };
}

_setEventListeners() {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const buttonElement = formElement.querySelector(".button__profile");
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
}


enableValidation() {
  const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, settings);
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
    });
  };
}

}