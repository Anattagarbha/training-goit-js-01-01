/* присвой переменной isMatch выражение проверки
равенства введённого и сохранённого ранее паролей */

"use strict";

function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  const isMatch = password === SAVED_PASSWORD;
  return isMatch;
}
