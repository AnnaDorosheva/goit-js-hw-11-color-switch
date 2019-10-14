
import { colors }  from './colors.js';

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const changeBodyColir = {
    isActiv: false,

    start(){
      if(this.isActiv === true) {
        return;
      }
      this.isActiv = true;
      return this.changeColor = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
        }, 1000)  
    },

    stop() {
      this.isActiv = false;
      clearInterval(this.changeColor);
    },
  }; 
 

  refs.startBtn.addEventListener('click', changeBodyColir.start.bind(changeBodyColir));
  refs.stopBtn.addEventListener('click', changeBodyColir.stop.bind(changeBodyColir));