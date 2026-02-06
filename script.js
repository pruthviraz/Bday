
/* COUNTDOWN */
let target = new Date("2026-12-31").getTime();

/* LIGHTBOX */
function openImg(el){
document.getElementById("popup").src = el.src;
document.querySelector(".lightbox").style.display = "flex";
}

function closeImg(){
document.querySelector(".lightbox").style.display = "none";
}

/* MUSIC */
let playing = true;

function toggleMusic(){
let m = document.getElementById("music");
playing ? m.pause() : m.play();
playing = !playing;
}

/* HEARTS */
setInterval(()=>{
let h = document.createElement("div");
h.className = "heart";
h.innerHTML = "💖";
h.style.left = Math.random()*100 + "vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),6000);
},400);

/* CONFETTI */
function celebrate(){
for(let i=0;i<120;i++){
let c = document.createElement("div");
c.className="confetti";
c.style.left=Math.random()*100+"vw";
c.style.background=`hsl(${Math.random()*360},100%,50%)`;
document.body.appendChild(c);
setTimeout(()=>c.remove(),4000);
}
alert("Love Delivered 💕");
}