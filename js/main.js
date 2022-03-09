// (function(){
//     const listElements = document.querySelectorAll('.menu__item--show');
//     const list = document.querySelector('.menu__links');
//     const menu = document.querySelector('.menu__hamburguer');

//     const addClick = ()=>{
//         listElements.forEach(element =>{
//             element.addEventListener('click', ()=>{


//                 let subMenu = element.children[1];

//                 element.classList.toggle('menu__item--active');
//                 let height = 0;
//                 console.log(subMenu.clientHeight);

//                 if(subMenu.clientHeight === 0){
//                     height = subMenu.scrollHeight;
//                 }

//                 subMenu.style.height = `${height}px`;
//             })
//         })
//     }

// const deleteStyleHeight = () =>{
//   listElements.forEach(element => {

//     if (element.children[1].getAttribute('style')) {
//       element.children[1].revomeAttribute('style');
//       element.classList.remove('menu__item--active');

//     }

//   });

// }

//     window.addEventListener('resize', ()=>{
//       if (window.innerWidth >850) {
//         deleteStyleHeight();
//         if(list.classList.contains('menu__links--show'))
//           list.classList.remove('menu__links--show');

//       }else{
//         addClick();
//       }
//     });

//     if(window.innerWidth <=800){
//       addClick();
//     }

//     menu.addEventListener('click',()=> list.classList.toggle('menu__links--show'));

// })();


/// SCROLL///

ScrollReveal().reveal('.punchline', { delay:300 });

var slideRight = ScrollReveal({
    distance: '10%',
    delay: 90,
    duration: 500,
    origin: 'right',
    // viewFactor: 0.4,  /// el porcentaje en scroll para que se muestre  
});

slideRight.reveal(`.tagline`);

var slideLeft = {
  distance: '50%',
  delay: 90,
  duration: 500, 
  //easing: 'steps(2)',
  origin: 'left',
  viewFactor: 0.4,  /// el porcentaje en scroll para que se muestre
  
};

ScrollReveal().reveal('.slideleft', slideLeft);
      
var slideUp = {
    distance: '50%',
    delay: 90,
    duration: 500,
    origin: 'top',
    viewFactor: 0.4,  /// el porcentaje en scroll para que se muestre
    
};

ScrollReveal().reveal('.slide-up', slideUp);



///PLAYER///

const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});

