const form = document.getElementById('questions');
const content = document.querySelector('.quiz__box');
const steps = document.querySelectorAll('.quiz__questions-item');
const progres = document.querySelectorAll('.quiz__item');
const btnNext = document.querySelector(".form__btns")
const btnForm = document.querySelector(".quiz__btns")

const mini = document.querySelector('.quiz__questions-item--mini')

if (form) {
  let count = 0;
  btnNext.addEventListener('click', function () {
    count++
    quiz()
    prog()
    if (count === 2) {

    }
  })

  btnForm.addEventListener('click', function () {
    count++
    quiz()
  })



  function quiz() {
    steps.forEach((element, i) => {
      element.classList.remove('quiz__questions-item--active')
      if (i === count) {
        element.classList.add('quiz__questions-item--active')
      }



      if (count === 1) {
        form.style.height = '300px'
      }
      else {
        form.style.height = '450px'
      }

      if (count === 5) {
        btnNext.style.visibility = 'hidden';
      }
    });

    if (count === 1) {
      content.style.bottom = '-290px'
    } else {
      content.style.bottom = '-400px'
    }


    if (count === 3) {
      content.style.bottom = '-240px'
    }

    if (count === 2) {
      content.style.bottom = '-440px'
    }

    if (count === 4) {
      content.style.bottom = '-240px'
    }

  }

  function prog() {
    progres.forEach((element, i) => {
      if (i === count) {
        element.classList.add('quiz__item--active')
      }
    });
  }
}

