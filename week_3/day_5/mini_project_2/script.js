// play audio for a key code and add visual effect
function playByKeyCode(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const keyEl = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0; // rewind to start so rapid presses replay
  audio.play();
  if (keyEl) keyEl.classList.add('playing');
}

// keyboard support
window.addEventListener('keydown', function (e) {

  if (e.repeat) return;
  playByKeyCode(e.keyCode);
});

// 
document.querySelectorAll('.key').forEach(k => {
  k.addEventListener('click', function () {
    const code = this.getAttribute('data-key');
    playByKeyCode(code);
  });
  // remove playing class after transform transition ends
  k.addEventListener('transitionend', function (e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  });
});
