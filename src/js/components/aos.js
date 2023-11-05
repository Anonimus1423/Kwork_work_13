


const one = document.querySelector('.letters__img--one')
const two = document.querySelector('.letters__img--two')
const three = document.querySelector('.letters__img--three')
const four = document.querySelector('.letters__img--four')
const five = document.querySelector('.letters__img--five')
const letter = document.querySelector('.letters')

const reviews = document.querySelector('.reviews')
const rowOne = document.querySelector('.reviews__row--one')
const rowTwo = document.querySelector('.reviews__row--two')
const rowThree = document.querySelector('.reviews__row--three')
const rowFour = document.querySelector('.reviews__row--four')

const features = document.querySelector('.features')
const s1 = document.getElementById('s1')
const s2 = document.getElementById('s2')
const s3 = document.getElementById('s3')
const s4 = document.getElementById('s4')
const s5 = document.getElementById('s5')
const s6 = document.getElementById('s6')
const s7 = document.getElementById('s7')

const grid = document.querySelector('.grid')

const gridItem = document.querySelectorAll(".grid__item")

if (grid) {

    window.addEventListener('scroll', (e) => {
      let scrollTop = window.scrollY;
      let gridCenter = grid.offsetTop - 1000;

      const gridTop = document.querySelector('.grid__top')
      const gridBot = document.querySelector('.grid__bot')
      const gridTopOne = document.querySelector('.grid__top--one')
      const gridBotOne = document.querySelector('.grid__bot--one')
      const gridTopTwo = document.querySelector('.grid__top--two')
      const gridBotTwo = document.querySelector('.grid__bot--two')
      const gridTopThree = document.querySelector('.grid__top--three')
      const gridBotThree = document.querySelector('.grid__bot--three')

      if (scrollTop > gridCenter + 500) {
        gridTop.classList.add('grid__top--acimation')
        gridBot.classList.add('grid__bot--acimation')
        gridTopOne.classList.add('grid__top--acimation')
        gridBotOne.classList.add('grid__bot--acimation')
        gridTopTwo.classList.add('grid__top--acimation')
        gridBotTwo.classList.add('grid__bot--acimation')
        gridTopThree.classList.add('grid__top--acimation')
        gridBotThree.classList.add('grid__bot--acimation')
      }





    });

}


if (features) {
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let featuresCenter = features.offsetTop - 1000;


    if (scrollTop > featuresCenter + 1300) {
    } else if (scrollTop > featuresCenter + 1200) {
      s7.style.color = '#F0F0F0';

    } else if (scrollTop > featuresCenter + 1100) {
      s6.style.color = '#F0F0F0';
      s7.style.color = '#54555F';
    } else if (scrollTop > featuresCenter + 1000) {
      s5.style.color = '#F0F0F0';
      s6.style.color = '#54555F';
    }
    else if (scrollTop > featuresCenter + 900) {
      s4.style.color = '#F0F0F0';
      s5.style.color = '#54555F';
    } else if (scrollTop > featuresCenter + 800) {
      s3.style.color = '#F0F0F0';
      s4.style.color = '#54555F';
    } else if (scrollTop > featuresCenter + 600) {
      s2.style.color = '#F0F0F0';
      s3.style.color = '#54555F';
    } else if (scrollTop > featuresCenter) {
      s1.style.color = '#F0F0F0';
      s2.style.color = '#54555F';

    }

  });
}


if (reviews) {
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let reviewsCenter = reviews.offsetTop - 1000;


    if (scrollTop > reviewsCenter + 1200) {
      rowThree.style.transform = 'translateX(-200px)';
      rowFour.style.transform = 'translateX(-100px)';

    } else if (scrollTop > reviewsCenter + 1000) {
      rowThree.style.transform = 'translateX(-180px)';
      rowFour.style.transform = 'translateX(-120px)';
    } else if (scrollTop > reviewsCenter + 800) {
      rowThree.style.transform = 'translateX(-160px)';
      rowFour.style.transform = 'translateX(-140px)';
    } else if (scrollTop > reviewsCenter + 600) {
      rowThree.style.transform = 'translateX(-140px)';
      rowFour.style.transform = 'translateX(-160px)';
    }
    else if (scrollTop > reviewsCenter + 400) {
      rowThree.style.transform = 'translateX(-120px)';
      rowFour.style.transform = 'translateX(-200px)';
    } else if (scrollTop > reviewsCenter + 200) {
      rowThree.style.transform = 'translateX(-100px)';
      rowFour.style.transform = 'translateX(-220px)';
    } else if (scrollTop > reviewsCenter - 100) {
      rowThree.style.transform = 'translateX(-80px)';
      rowFour.style.transform = 'translateX(-240px)';
    } else if (scrollTop > reviewsCenter - 300) {
      rowThree.style.transform = 'translateX(-60px)';
      rowFour.style.transform = 'translateX(-280px)';
    }

  });
}



if (reviews) {
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let reviewsCenter = reviews.offsetTop - 1000;


    if (scrollTop > reviewsCenter + 1200) {
      rowOne.style.transform = 'translateY(-180px)';
      rowTwo.style.transform = 'translateY(-20px)';

    } else if (scrollTop > reviewsCenter + 1000) {
      rowOne.style.transform = 'translateY(-140px)';
      rowTwo.style.transform = 'translateY(-40px)';
    } else if (scrollTop > reviewsCenter + 800) {
      rowOne.style.transform = 'translateY(-120px)';
      rowTwo.style.transform = 'translateY(-60px)';
    } else if (scrollTop > reviewsCenter + 600) {
      rowOne.style.transform = 'translateY(-100px)';
      rowTwo.style.transform = 'translateY(-80px)';
    }
    else if (scrollTop > reviewsCenter + 400) {
      rowOne.style.transform = 'translateY(-80px)';
      rowTwo.style.transform = 'translateY(-100px)';
    } else if (scrollTop > reviewsCenter + 200) {
      rowOne.style.transform = 'translateY(-60px)';
      rowTwo.style.transform = 'translateY(-120px)';
    } else if (scrollTop > reviewsCenter - 100) {
      rowOne.style.transform = 'translateY(-40px)';
      rowTwo.style.transform = 'translateY(-160px)';
    } else if (scrollTop > reviewsCenter - 300) {
      rowOne.style.transform = 'translateY(-20px)';
      rowTwo.style.transform = 'translateY(-180px)';
    }

  });
}


if (letter) {
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let heroCenter = letter.offsetTop - 1000;


    if (scrollTop > heroCenter + 1000) {
      one.style.transform = 'translateX(0px)';
      two.style.transform = 'translateX(0px)';
      three.style.transform = 'translateX(0px)';
      four.style.transform = 'translateX(0px)';
      five.style.transform = 'translateX(0px)';
    } else if (scrollTop > heroCenter + 900) {
      one.style.transform = 'translateX(-10px)';
      two.style.transform = 'translateX(-30px)';
      three.style.transform = 'translateX(-50px)';
      four.style.transform = 'translateX(-80px)';
      five.style.transform = 'translateX(-100px)';
    } else if (scrollTop > heroCenter + 800) {
      one.style.transform = 'translateX(-20px)';
      two.style.transform = 'translateX(-60px)';
      three.style.transform = 'translateX(-100px)';
      four.style.transform = 'translateX(-160px)';
      five.style.transform = 'translateX(-250px)';
    } else if (scrollTop > heroCenter + 700) {
      one.style.transform = 'translateX(-30px)';
      two.style.transform = 'translateX(-90px)';
      three.style.transform = 'translateX(-150px)';
      four.style.transform = 'translateX(-240px)';
      five.style.transform = 'translateX(-350px)';
    } else if (scrollTop > heroCenter + 550) {
      one.style.transform = 'translateX(-40px)';
      two.style.transform = 'translateX(-120px)';
      three.style.transform = 'translateX(-200px)';
      four.style.transform = 'translateX(-320px)';
      five.style.transform = 'translateX(-450px)';
    } else if (scrollTop > heroCenter + 500) {
      one.style.transform = 'translateX(-50px)';
      two.style.transform = 'translateX(-150px)';
      three.style.transform = 'translateX(-250px)';
      four.style.transform = 'translateX(-400px)';
      five.style.transform = 'translateX(-500px)';
    } else if (scrollTop > heroCenter + 400) {
      one.style.transform = 'translateX(-60px)';
      two.style.transform = 'translateX(-180px)';
      three.style.transform = 'translateX(-300px)';
      four.style.transform = 'translateX(-480px)';
      five.style.transform = 'translateX(-600px)';
    } else if (scrollTop > heroCenter + 300) {
      one.style.transform = 'translateX(-70px)';
      two.style.transform = 'translateX(-210px)';
      three.style.transform = 'translateX(-350px)';
      four.style.transform = 'translateX(-560px)';
      five.style.transform = 'translateX(-700px)';
    } else if (scrollTop > heroCenter + 200) {
      one.style.transform = 'translateX(-80px)';
      two.style.transform = 'translateX(-240px)';
      three.style.transform = 'translateX(-400px)';
      four.style.transform = 'translateX(-640px)';
      five.style.transform = 'translateX(-800px)';
    } else if (scrollTop > heroCenter + 100) {
      one.style.transform = 'translateX(-90px)';
      two.style.transform = 'translateX(-270px)';
      three.style.transform = 'translateX(-450px)';
      four.style.transform = 'translateX(-720px)';
      five.style.transform = 'translateX(-900px)';
    } else {
      one.style.transform = 'translateX(-100px)';
      two.style.transform = 'translateX(-300px)';
      three.style.transform = 'translateX(-500px)';
      four.style.transform = 'translateX(-800px)';
      five.style.transform = 'translateX(-1000px)';
    }




  })

}





