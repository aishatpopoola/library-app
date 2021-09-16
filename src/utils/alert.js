const alert = (message, alertType) => {
  const alert = document.querySelector('#alert');
  alert.classList.add(alertType);
  alert.classList.remove('d-none');

  alert.innerText = message;

  setTimeout(() => {
    alert.classList.add('d-none');
  }, 2000);
};

export default alert;
