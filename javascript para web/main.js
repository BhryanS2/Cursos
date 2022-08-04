const teclas = document.querySelectorAll(".tecla");
const soundsClick = [];
const soundsKey = [];

function handleButtonClick(event) {
  const target = event.target;
  const instrument = target.classList[1];
  const findSound = soundsClick.find(
    (sound) => sound.instrument === instrument
  );
  if (findSound) {
    const sound = findSound.audio;
    sound.currentTime = 0;
    sound.play();
    return;
  }
  const audio = document.querySelector(`#som_${instrument}`);
  if (!audio) return;
  soundsClick.push({
    instrument,
    audio,
  });

  const sound = audio;
  sound.currentTime = 0;
  sound.play();
}

teclas.forEach((tecla) => {
  tecla.addEventListener("click", handleButtonClick);
});

document.addEventListener("keydown", (e) => {
  const key = String(e.key).toLowerCase();
  const findSound = soundsKey.find((sound) => sound.key === key);
  soundsKey.forEach((sound) => {
    if (sound.button.classList.contains("ativa")) {
      sound.button.classList.remove("ativa");
    }
  });

  if (findSound) {
    const sound = findSound.audio;
    sound.currentTime = 0;
    sound.play();
    findSound.button.classList.add("ativa");
    return;
  }
  const soundPath = `sounds/key${key}.wav`;
  const audio = document.querySelector(`audio[src="${soundPath}"]`);
  if (!audio) return;
  const audioId = audio.id.split("_")[2];
  const button = document.querySelector(`button.tecla.tecla_${audioId}`);
  if (!button) return;
  button.classList.add("ativa");
  soundsKey.push({
    key,
    audio,
    button,
  });
  const sound = audio;
  sound.currentTime = 0;
  sound.play();
});
