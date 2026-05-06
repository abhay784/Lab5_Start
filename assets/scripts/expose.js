// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();
function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const img = document.querySelector('#expose img');
  const audio = document.querySelector('audio');
  const volSlider = document.getElementById('volume');
  const volIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  audio.volume = volSlider.value / 100;

  hornSelect.addEventListener('change', function () {
    const horn = hornSelect.value;

    img.src = `assets/images/${horn}.svg`;
    img.alt = horn;
    audio.src = `assets/audio/${horn}.mp3`;
  });
  volSlider.addEventListener('input', function () {
    const vol = parseInt(volSlider.value);

    audio.volume = vol / 100;

    if (vol === 0) {
      volIcon.src = 'assets/icons/volume-level-0.svg';
      volIcon.alt = 'Volume level 0';
    } else if (vol < 33) {
      volIcon.src = 'assets/icons/volume-level-1.svg';
      volIcon.alt = 'Volume level 1';
    } else if (vol < 67) {
      volIcon.src = 'assets/icons/volume-level-2.svg';
      volIcon.alt = 'Volume level 2';
    } else {
      volIcon.src = 'assets/icons/volume-level-3.svg';
      volIcon.alt = 'Volume level 3';
    }
  });
  playButton.addEventListener('click', function () {
    if (!audio.src || hornSelect.value === 'select') return;

    audio.currentTime = 0;
    audio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}