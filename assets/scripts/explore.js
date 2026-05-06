// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const playButton = document.querySelector('button');
  const img = document.querySelector('img');

  const synth = window.speechSynthesis;

  function populateVoices() {
    const voices = synth.getVoices();
    const rand = voiceSelect.querySelector('[value="select"]');
    if (rand) {
      rand.remove();
    }
    voiceSelect.innerHTML = '';
    voices.forEach((voice, index) => {
      const choice = document.createElement('option');
      choice.textContent = `${voice.name} (${voice.lang})`;
      choice.value = index;
      voiceSelect.appendChild(choice);
    });
  }
  populateVoices();
  synth.addEventListener('voiceschanged', populateVoices);

  playButton.addEventListener('click', function () {
    synth.cancel();
    const text = textArea.value;
    if (!text.trim()) return;
    const speaking = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    const selectedVoiceIndex = parseInt(voiceSelect.value);
    if (selectedVoiceIndex < voices.length) {
      speaking.voice = voices[selectedVoiceIndex];
    }
    speaking.addEventListener('start', function () {
      img.src = 'assets/images/smiling-open.png';
      img.alt = 'Smiling face, mouth open';
    });
    speaking.addEventListener('end', function () {
      img.src = 'assets/images/smiling.png';
      img.alt = 'Smiling face';
    });
    synth.speak(speaking);
  });

}