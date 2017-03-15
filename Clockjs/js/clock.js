
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if(seconds==00){
    secondHand.style.transform ='rotate(90deg)';
    secondHand.style.transition = 'all 0.00s';
}else{
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}


  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  if(mins==00){
    minsHand.style.transform ='rotate(90deg)';
    minsHand.style.transition = 'all 0.00s';
}else{
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
}


  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90 ;
  if(hour==00){
    hourHand.style.transform ='rotate(90deg)';
    hourHand.style.transition = 'all 0.00s';
}else{
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

}

setInterval(setDate, 1000);
