document.addEventListener('DOMContentLoaded', () => {
  const item = document.querySelectorAll(".steps__item")
  item.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const btn = self.querySelector(".steps__btn")
      const text = self.querySelector(".steps__list")
      const title = self.querySelector(".steps__subtitle")
      const svg = self.querySelector(".steps__svg")
      text.classList.toggle('steps__list--active')
      self.classList.toggle('steps__item--active')
      btn.classList.toggle('steps__btn--active')
      title.classList.toggle('steps__subtitle--active')
      svg.classList.toggle('steps__svg--active')

      if (text.classList.contains('steps__list--active')) {
        text.style.maxHeight = text.scrollHeight + 'px';
      } else {
        text.style.maxHeight = null;
      }

    });
  });



});

document.addEventListener('DOMContentLoaded', () => {
  const item = document.querySelectorAll(".questions__item")
  item.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const btn = self.querySelector(".questions__btn")
      const text = self.querySelector(".questions__text")
      const title = self.querySelector(".questions__subtitle")
      const svg = self.querySelector(".questions__svg")
      text.classList.toggle('questions__text--active')
      self.classList.toggle('questions__item--active')
      btn.classList.toggle('questions__btn--active')
      title.classList.toggle('questions__subtitle--active')
      svg.classList.toggle('questions__svg--active')

      if (text.classList.contains('questions__text--active')) {
        text.style.maxHeight = text.scrollHeight + 'px';
      } else {
        text.style.maxHeight = null;
      }

    });
  });



});


