/* TYPEWRITER – HINDI FILMY DIALOGUE */
const dialogueText =
  "Kehte hain pyaar sirf filmon mein hota hai…\n" +
  "lekin jab tum muskurati ho,\n" +
  "toh har scene sach lagta hai ❤️\n\n" +
  "Aaj ek sawaal hai…\n" +
  "sirf dil se jawaab dena 💖";

let i = 0;
const dialogue = document.getElementById("dialogue");

(function typeWriter() {
  if (i < dialogueText.length) {
    dialogue.innerHTML += dialogueText.charAt(i++);
    setTimeout(typeWriter, 40);
  }
})();

/* NO BUTTON RUNS */
const noBtn = document.getElementById("no");
noBtn.addEventListener("click", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* ROSES */
function createRose() {
  const rose = document.createElement("div");
  rose.className = "rose";
  rose.innerText = "🌹";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = (4 + Math.random() * 2) + "s";
  document.body.appendChild(rose);
  setTimeout(() => rose.remove(), 6000);
}

/* TUM HI HO LYRICS (TEXT ONLY) */
const lyricsLines = [
  "Tum hi ho…",
  "Tum hi ho…",
  "Zindagi ab tum hi ho 💖",
  "",
  "Chain bhi, mera dard bhi…",
  "Meri aashiqui ab tum hi ho 🌹"
];

let l = 0;
const lyrics = document.getElementById("lyrics");

function showLyrics() {
  if (l < lyricsLines.length) {
    lyrics.innerHTML += lyricsLines[l++] + "<br>";
    setTimeout(showLyrics, 1200);
  }
}

/* YES BUTTON */
document.getElementById("yes").addEventListener("click", () => {
  document.getElementById("card").style.display = "none";
  document.getElementById("final").style.display = "block";

  confetti({
    particleCount: 160,
    spread: 120,
    origin: { y: 0.6 }
  });

  setInterval(createRose, 350);
  showLyrics();

  setTimeout(() => {
    window.open(
      "https://wa.me/?text=I%20said%20YES%20💖",
      "_blank"
    );
  }, 3500);
});yesBtn.addEventListener("click", () => {
  music.play();
});let noCount = 0;

const noMessages = [
  "Are you sure? 🥺",
  "Ek baar aur soch lo 💔",
  "Dil toot jayega mera 😢",
  "Last chance… warna YES hi bachega 😏"
];

noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount <= 3) {
    noBtn.innerText = noMessages[noCount - 1];
  } 
  else if (noCount === 4) {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 60 + "%";
  } 
  else {
    noBtn.style.display = "none";
    noText.innerText = "Bas bas… ab YES hi option hai ❤️";
  }
});
