const audioArray = ["../sounds/meow1.mp3", "../sounds/meow2.mp3", "../sounds/meowq3.mp3", "../sounds/meow4.mp3", "../sounds/meow5.mp3", "../sounds/meow6.mp3"];

function meow() {
  const audioIndex = Math.floor(Math.random() * audioArray.length);
  const audio = new Audio(audioArray[audioIndex]);
  audio.play();
  setTimeout(loading, 100);
}
function meow2() {
    const audioIndex = Math.floor(Math.random() * audioArray.length);
    const audio = new Audio(audioArray[audioIndex]);
    audio.play();
  }
function move() {
    location.href = 'strayinfo.html';
}

function loading() {
  document.getElementById("loading").innerHTML = "Loading..."
  document.getElementById("loadgif").innerHTML = "<img src=../images/poesje.gif>"
  setTimeout(move, 1500);
}