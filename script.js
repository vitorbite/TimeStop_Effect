const effect1 = document.getElementById("effect1");
const effect2 = document.getElementById("effect2");
const effect3 = document.getElementById("effect3");
const bg = document.getElementById("bg");
const Dio = document.getElementById("Dio");
const Stand = document.getElementById("stand");
let time = true;
let click = true;

document.addEventListener('click', (e)=>{
    if (e.target === Dio && click === true){
        TS();
    }
})

function TS() {
  click = false  
  if (time) {
    time = false;
    const audio = document.getElementById("audio");
    audio.play();
    // document.querySelector('img').src = 'Stand.png'
    Stand.style.display = "block";

    setTimeout(() => {
      effect1.classList.add("effect");
      effect2.classList.add("effect");
      effect3.classList.add("effect");
      bg.classList.add("animation");
      Dio.classList.add("Dio");
      Dio.style.width = "400px";
      Stand.style.display = "none";
    }, 1700);
  } else {
    const audio2 = document.getElementById("audio2");
    audio2.play();
    time = true;
    setTimeout(() => {
      Dio.style.width = "300px";
      effect1.classList.remove("effect");
      effect2.classList.remove("effect");
      effect3.classList.remove("effect");
      bg.classList.remove("animation");
    }, 1700);
  }
  setTimeout(() => {
    click = true
  }, 4000);
}
