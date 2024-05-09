export default class formValidator {
/*constructor(form, settings){
    this._formElement  = formElement;
    this._inputElement = inputElement;
    this._errorMessage = errorMesage;
    this._errorElement = errorElement;
    this._settings = settings;
}

chekInput(){

    showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add("form__input_type_error");
        errorElement.textContent = errorMessage;
        errorElement.classList.add("form__input-error_active");
      };
      
    hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove("form__input_type_error");
        errorElement.classList.remove("form__input-error_active");
        errorElement.textContent = "";
      };

    hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove("form__input_type_error");
        errorElement.classList.remove("form__input-error_active");
        errorElement.textContent = "";
      };

    checkInputValidity = (formElement, inputElement, settings) => {
        if (!inputElement.validity.valid) {
          showInputError(
            this.formElement,
            this.inputElement,
            this.inputElement.validationMessage,
            settings
          );
        } else {
          hideInputError(formElement, inputElement, settings);
        }
      };

    hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      };
}

toogleButtonState(){

    toggleButtonState = (inputList, buttonElement) => {
        if (hasInvalidInput(inputList)) {
          buttonElement.classList.add("button_inactive");
        } else {
          buttonElement.classList.remove("button_inactive");
        }
      };
}

_setEventListeners(){

    setEventListeners = (formElement, settings) => {
        const inputList = Array.from(formElement.querySelectorAll(".form__input"));
        const buttonElement = formElement.querySelector(".button__profile");
        toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
          inputElement.addEventListener("input", function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
          });
        });
      };
}

enableValidation(){
    settings();
}*/

}

