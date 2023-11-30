const formValues = {}  // Сюда пишутся значения формы (Object как в Java, или dict из Python)
// Сюда пишутся статусы валидации каждого поля. Если поле ни разу не валидировалось,
// то при обращении к Object вернётся undefined, который при логическом сравнении обрабатывается как false
const formValidation = {}

export const validateName = (name) => {
  const regExp = /^[a-zA-Z]+$/
  return regExp.test(name); 
}

export const validatePassword = (password) => {
  const regExp = /^(?=.*[A-Z])(?=.*[a-z\d]).+$/; // Регулярное выражение: должна быть хотя бы одна заглавная буква, буквы и цифры
  return regExp.test(password);
}

export const validateReapetedPassword = (reapeted_password) => {
  if (reapeted_password === formValues["password"])
  {
    return reapeted_password;
  }
  else 
  {
    return undefined;
  }
}

export const validateEmail = (email) => {
  // Создадим шаблон регулярного выражения. В нём применяются шаблонные строки
  // Гуглить по тегам: "шаблонные строки js", "регулярные выражения"
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return String(email)
    .toLowerCase()
    .match(regExp);
}

// Функция возвращающая true если все валидации пройдены, и false если хотя бы одна не пройдена
export const getValidationStatus = () => {
  // Происходит функциональная мгаия, читай строчку кода ниже как:
  // Получить значения (не ключи) из объекта, затем применить к каждому значению функцию двойного логического отрицания
  // (преобразование к булевому типу) и результаты всех применений это true, то вернуть true, иначе - false
  return Object.values(formValidation).every((validationStatus) => !!validationStatus)
}

export const checkButton = (btn_id) => {
  if (getValidationStatus()){
    document.getElementById(btn_id).disabled = false;
  }
  else {
    document.getElementById(btn_id).disabled = true;
  }
}

// Функция возвращающая которая ставит значение поля в форме по ключу
export const setFormValue = (valueKey, newValue, validator) => {
  formValues[valueKey] = newValue
  if (validator !== undefined) 
  {
    formValidation[valueKey] = validator(newValue);
    if (!!(formValidation[valueKey]))
    {
      document.getElementById(valueKey).classList.remove("invalid");
      document.getElementById(valueKey).classList.add("valid");
    }
    else
    {
      document.getElementById(valueKey).classList.add("invalid");
      document.getElementById(valueKey).classList.remove("valid");
    }
  }
}

// Функция для обработки отправки формы регистрации
// В этой функции должен быть http запрос на сервер для регистрации пользователя (сейчас просто демонстрация)
export const submitSignUpForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT")
    return false
  }
  console.log("FORM IS FINE")
  console.log(formValues)
  return true
}
