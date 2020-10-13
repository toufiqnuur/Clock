const tg = document.querySelector('.outer');
repeat(60, (i)=> {
  let line = document.createElement('div');
  line.setAttribute('class', 'line');
  line.style.transform = `rotate(${i/60*360}deg)`;
  tg.appendChild(line);
});

const line = document.querySelectorAll('.line');
[14, 29, 44, 59].forEach((i)=> {
  line[i].setAttribute('class', 'line-accent');
});

const arrowH = document.querySelector('.arrowH');
const arrowM = document.querySelector('.arrowM');
const arrowS = document.querySelector('.arrowS');

setInterval(()=> {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  arrowH.style.transform = `rotate(${hours/24*360}deg)`;
  arrowM.style.transform = `rotate(${minutes/60*360}deg)`;
  arrowS.style.transform = `rotate(${seconds/60*360}deg)`;
}, 1000);

const inner = document.querySelector('.inner');
const circle = document.createElement('div');
circle.setAttribute('class', 'circle');
inner.appendChild(circle);

function repeat(int, func) {
  for (let i = 1; i <= int; i++) {
    func(i);
  }
}