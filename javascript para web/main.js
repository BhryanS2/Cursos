const buttons = document.querySelectorAll(".tecla");
const memoryAudios = [
  { sound: "sounds/keyq.wav", audio: document.getElementById("som_tecla_pom") },
  {
    sound: "sounds/keyw.wav",
    audio: document.getElementById("som_tecla_clap"),
  },
  { sound: "sounds/keye.wav", audio: document.getElementById("som_tecla_tim") },
  {
    sound: "sounds/keya.wav",
    audio: document.getElementById("som_tecla_puff"),
  },
  {
    sound: "sounds/keys.wav",
    audio: document.getElementById("som_tecla_splash"),
  },
  {
    sound: "sounds/keyd.wav",
    audio: document.getElementById("som_tecla_toim"),
  },
  { sound: "sounds/keyz.wav", audio: document.getElementById("som_tecla_psh") },
  { sound: "sounds/keyx.wav", audio: document.getElementById("som_tecla_tic") },
  { sound: "sounds/keyc.wav", audio: document.getElementById("som_tecla_tom") },
];

function playAudio(audio = "") {
  const audioToplay = memoryAudios.find((e) => e.sound === audio);
  if (!audioToplay) return;

  audioToplay.audio.currentTime = 0;
  audioToplay.audio.play();
  console.log(audioToplay);
  const som = audioToplay.audio.id.split("_")[2];
  const btn = document.querySelector(`button.tecla_${som}`);
  btn.focus();
}

document.addEventListener("keydown", (e) => {
  const key = e.key;
  const keyLower = key.toLowerCase();
  const sound = `sounds/key${keyLower}.wav`;
  if (!memoryAudios.find((e) => e.sound === sound)) return;
  playAudio(sound);
});
