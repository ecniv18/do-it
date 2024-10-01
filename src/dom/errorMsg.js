export function sendErrorMsg(
  errorMsgs,
  receiver = document.querySelector('.form')
) {
  const error = document.createElement('span');
  const msgs = errorMsgs.map((msg) => msg).join('\n');
  error.innerText = msgs;
  error.classList.add('error-msg');

  removeErrorMsg();
  receiver.appendChild(error);
}

export function removeErrorMsg() {
  if (document.querySelector('.error-msg') !== null) {
    document.querySelector('.error-msg').remove();
  }
}
