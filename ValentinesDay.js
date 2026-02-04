



PritisniClick=()=>{
if(validiraj()){
  document.body.className = "body2";
document.body.innerHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="ValentinesDay.css">
</head>
<body class="body2">
  
  <div class="card">
  <h1> Hena will you be my valentine </h1>
  <div class="buttons">
  <button class="yes" onclick="yesClick()">Yes ❤️</button>
  <button class="no" id="noBtn" onclick="randomMoveNo()">No </button>
</div>
   <script src="ValentinesDay.js" defer></script>
</div>
</body>
</html>
  `;
  window.noBtn = document.getElementById("noBtn");
    window.card = document.querySelector(".card");
}
else{
  var tb=document.getElementById("datumUlaska")
}
}

function yesClick() {
  document.body.innerHTML = `
    <div style="
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center; 
      height:100vh;
      background:#ff9a9e;
      color:white;
      text-align:center;
      padding:20px;
    ">
      <h1> Znaoo sam hehehehe </h1>
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG9ybm0wdGRvbTk3czRoeXJqbHBsZ2tkZDFnZzk4dDM1Z2ZjZ3JqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T70hpBP1L0N7U0jtkq/giphy.gif"
        style="width:250px; margin-top:20px; border-radius:20px;"
      >
    </div>
  `;
}
/*validiraj=()=>{
  const tekstBox=document.getElementById("datumUlaska");
  const tekst=tekstBox.value;
  const regex = /^28\.0?2\.2023$/;
  if (!regex.test(tekst)) return false;
  else{
  return true;
  }
}*/
function validiraj() {
  const tekstBox = document.getElementById("datumUlaska");
  const tekst = tekstBox.value.trim();
  const greskaDiv = document.getElementById("greska");

  const regex = /^28\.0?2\.2023$/; 

  if (!regex.test(tekst)) {
    greskaDiv.textContent = "Ne znas datum ccc, btw odvajaj sa tackom dane mjesece i godine 😉";
    tekstBox.classList.add("shake");
  setTimeout(() => tekstBox.classList.remove("shake"), 300);
    return false;
  } else {
    greskaDiv.textContent = ""; // ukloni poruku ako je validno
    return true;
  }
}
/*randomMoveNo=()=>{
 const maxX = card.clientWidth - noBtn.offsetWidth;
  const maxY = card.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

}*/
const buttons = document.querySelector(".buttons");

function randomMoveNo() {
  const maxX = buttons.clientWidth - noBtn.offsetWidth;
  const maxY = buttons.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}
//src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"