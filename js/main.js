import {checkButton as check_button, setFormValue, submitSignUpForm, validateEmail, validateName, validatePassword, validateReapetedPassword} from "./utils.js"

// Выписываем все айдишники HTMl-элементов в константы для переиспользования
const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_id = 'password'
const email_id = 'email'

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
// const sign_in_form_id = 'sign_in_form'  // Пригодится
const sign_up_btn_id = 'sign_up_btn'
const sign_in_form_id = 'sign_in_form'
const passwordReapetId = "passwordReapet"


// Получаем элемент DOM-дерева по id и присваиваем значение аттрибуту oninput
// oninput вызывается с параметром "event" каждый раз, когда ввод меняется
// Значение, которое мы присваеваем этому аттрибуту - это функция, определённая в стрелочном стиле
// Гуглить по тегам "события JS", "onchange/oninput HTML", "стрелочные функции JS", ...

const first_name = document.getElementById(first_name_id);

first_name.oninput = (e) => {
  setFormValue(first_name_id, e.target.value, validateName);  // Установить значение без валидации
  check_button(sign_up_btn_id);
}

const last_name = document.getElementById(last_name_id);
last_name.oninput = (e) => {
  setFormValue(last_name_id, e.target.value, validateName);
  check_button(sign_up_btn_id);
}

const email = document.getElementById(email_id);
email.oninput = (e) => {
  setFormValue(email_id, e.target.value, validateEmail); // Установить значение с валидацией
  check_button(sign_up_btn_id);
}

const password = document.getElementById(password_id);
password.oninput = (e) => {
  setFormValue(password_id, e.target.value, validatePassword);
  check_button(sign_up_btn_id);
}

const reapeted_password = document.getElementById(passwordReapetId);
reapeted_password.oninput = (e) => {
  setFormValue(passwordReapetId, e.target.value, validateReapetedPassword);
  check_button(sign_up_btn_id);
}

// Меняем стили объекта DOM дерева. Это позволяет скрыть форму регистрации и показать форму авторизации
// Объект формы не исключается из DOM дерева, а просто становистя невидимым
const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none"
  document.getElementById(sign_in_form_id).style.display = ""
}

const emailSignedInId = "email_in";
const passwordSignedInId = "password_in";
const buttonSignedInId = "sign_in_btn";

const email_in = document.getElementById(emailSignedInId);
email_in.oninput = (e) => {
  setFormValue(emailSignedInId, e.target.value, validateEmail); // Установить значение с валидацией
  check_button(buttonSignedInId);
}

const password_in = document.getElementById(passwordSignedInId);
password_in.oninput = (e) => {
  setFormValue(passwordSignedInId, e.target.value, validatePassword);
  check_button(buttonSignedInId);
}

const sign_in_btn = document.getElementById(buttonSignedInId);
sign_in_btn.onclick = (e) => {
  // При нажатии кнопки в форме по умолчанию происходит перезагрузка страницы.
  // Чтобы отключить его, нужно отменить стандартное поведение события
  e.preventDefault()
  submitSignUpForm()
}

const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
  // При нажатии кнопки в форме по умолчанию происходит перезагрузка страницы.
  // Чтобы отключить его, нужно отменить стандартное поведение события
  e.preventDefault()
  submitSignUpForm()
}
