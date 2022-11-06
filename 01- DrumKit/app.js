const playsound = (key) => {
  let keyCode = key.keyCode;

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio || !keyElement) {
    return;
  }

  keyElement.classList.add('playing');

  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    keyElement.classList.remove('playing');
  }, 100);
};

window.addEventListener('keydown', playsound);
