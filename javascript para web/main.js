function tocaSom(event) {
  const instrumento = event.target.classList[1];
  const som = document.querySelector(`#som_${instrumento}`);
  som.currentTime = 0;
  som.play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");
listaDeTeclas.forEach((tecla) => {
  tecla.addEventListener("click", tocaSom);
});
