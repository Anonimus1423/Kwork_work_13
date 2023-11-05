const videoBlok = document.querySelector('.production__wrapper')
const video = document.querySelector('.production__video')
const playbtn = document.querySelector('.production__palaybtn')
const play = document.querySelector('.production__play')
const list = document.querySelector('.production__list')

if (videoBlok) {
  playbtn.addEventListener('click', () => {
    video.play()
    video.controls = true;
    play.classList.add('production__play--played')
    list.classList.add('production__list--played')
  });

  video.onpause = function () {
    if (video.paused) {
      video.controls = false;
      play.classList.remove('production__play--played')
      list.classList.remove('production__list--played')
    }
  }
}



