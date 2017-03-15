

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function playSound(e) {
  //variable no cambiante local (const) scope:contexto(forma en que mis variables actuan con el DOM(document object model))
  //acento oblicuo($)|template
  //todas las funciones heredan PROTOTYPE(inicio de toda variable, funcion, etc dentro de javascript)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;//de tiene el funcionamiento del audio

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));//?
window.addEventListener('keydown', playSound);
