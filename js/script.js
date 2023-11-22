const mainForm = document.querySelector('.main-form');
const submitButton = document.querySelector('.data-submit-button');
const errorInfoElement = document.querySelector('.error-info');

submitButton.addEventListener('click', (event) => {

    // Отключаем стандартное действие браузера на событие
    event.preventDefault();

    // Вызываем валидацию формы
    validateForm();
});



// Валидировать форму
function validateForm() {

    // Класс для работой с данными из формы
    const formData = new FormData(mainForm);
    // Данные с формы в виде объекта
    const inputData = Object.fromEntries(formData.entries());

    validateUsername();
    validateEmail();
    validatePassword();

    // Валидация логина
    function validateUsername() {

        let usernameValid = true;

        if (inputData.username.length < 6 || inputData.username.length > 16) {

            usernameValid = false;
            errorInfoElement.innerHTML = 'Invalid username length (valid 6-16)';
        }
        // ...
        // ...

        if (!usernameValid) {
            document.querySelector('#username').classList.add('invalid-input');
        }
        else {
            document.querySelector('#username').classList.remove('invalid-input');
            errorInfoElement.innerHTML = '';
        }
    }
    function validateEmail() {
        // ПОЧИТАТЬ ПРО REGEX (регулярные выражения)
        // валидация почты
    }
    function validatePassword() {
        // 1. длинна пароля
        // 2. пароль совпадает с confirm-password
        // 3. нет лишних символ
    }
}

function validateEmail() {
    const emailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(inputData.email);

    if (!emailValid) {
        document.querySelector('#email').classList.add('invalid-input');
        errorInfoElement.innerHTML = 'Invalid email format';
    } else {
        document.querySelector('#email').classList.remove('invalid-input');
        errorInfoElement.innerHTML = '';
    }
}


// Отправить данные на сервер (в будущем)
function sendToServer(data) {


}

