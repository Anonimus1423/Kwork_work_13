const valid2 = document.querySelector('.graph-modal__valid')
const valid = document.querySelector('.form__valid')
const tel = document.getElementById('phone')
const tel2 = document.getElementById('phone2')

document.getElementById('form').addEventListener('submit', function (event) {
  var phone = document.getElementById('phone').value;
  if (!validatePhoneNumber(phone)) {
    event.preventDefault(); // Prevent form submission
    valid.classList.add('form__valid--active')
    tel.classList.add('form__input--active')
  }
});

document.getElementById('form2').addEventListener('submit', function (event) {
  var phone = document.getElementById('phone').value;
  if (!validatePhoneNumber(phone)) {
    event.preventDefault(); // Prevent form submission
    valid2.classList.add('graph-modal__valid--active')
    tel2.classList.add('graph-modal__input--active')
  }
});

function validatePhoneNumber(phone) {
  var re = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  return re.test(phone);
}


