const d = document;
const $form = d.querySelector("#register-form");
const $nameInput = d.querySelector("#name");
const $nameError = d.querySelector("#name-error");
const $emailInput = d.querySelector("#email");
const $emailError = d.querySelector("#email-error");
const $passwordInput = d.querySelector("#password");
const $passwordError = d.querySelector("#password-error");
const $confirmPasswordInput = d.querySelector("#confirm-password");
const $confirmPasswordError = d.querySelector("#confirm-password-error");
const $successMessage = d.querySelector("#success-message");
const $errorsMessages = d.querySelectorAll(".error");

// Función de Validación del Formulario
function validateForm(e) {
    let isValid = true;
    if($nameInput.value.trim()==="")
    {
        $nameError.innerText = "El nombre es obligatorio";
        isValid=false;
    }

    if($emailInput.value.trim()==="")
    {
        $emailError.innerText = "El email es obligatorio";
        isValid=false;
    }
    if($passwordInput.value.trim()==="")
    {
         $passwordError.innerText = "La contraseña es obligatoria";
            isValid=false;
    }
    if(!isValid){
        e.preventDefault();
    }
    else{
        e.preventDefault();
        $successMessage.innerText = "formulario enviado exitosamente"
        $form.reset();
    }
}

$form.addEventListener("submit", validateForm);

