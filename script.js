
import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(
  ".intro",
  //property object
  {x:[-200,0], opacity: 1 },
  //optional object
  {delay:stagger(0.15), duration:1},
  )

const toggleSwitch = document.querySelector('#switch');
const body = document.querySelector('#body');

function switchTheme(event) {
  if (event.target.checked) {
    
    body.style.setProperty('--background-color', 'var(--color-white-dark)');
    body.style.setProperty('--color-h2', 'var(--color-h2-dark)');
    body.style.setProperty('--color-p', 'var(--color-p-dark)');
    body.style.setProperty('--color-light-turquoise', 'var(--color-light-turquoise-dark)');
    body.style.setProperty('--color-shadow', 'var(--color-shadow-dark)');
    body.style.setProperty('--color-request', 'var(--color-request-dark)');
  } else {
 
    body.style.setProperty('--background-color', 'var(--color-white)');
    body.style.setProperty('--color-h2', 'var(--color-darkest)');
    body.style.setProperty('--color-p', 'var(--color-darker)');
    body.style.setProperty('--color-light-turquoise', '#f2fbfa');
    body.style.setProperty('--color-shadow', 'var(--color-darker)');
    body.style.setProperty('--color-request', 'var(--color-white)');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);



