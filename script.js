/* ELEMENTS */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noText = document.getElementById("noText");
const dialogue = document.getElementById("dialogue");
const lyrics = document.getElementById("lyrics");
const card = document.getElementById("card");
const final = document.getElementById("final");
const music = document.getElementById("bgm");

/* TYPEWRITER – FILMY HINDI */
const dialogueText =
  "Kehte hain pyaar sirf filmon mein hota hai…\n" +
  "lekin jab tum muskurati ho,\n" +
  "toh har scene sach lagta hai ❤️\n\n" +
  "Aaj ek sawaal hai…\n" +
  "sirf dil se jawaab dena 💖";

let i = 0;
(function typeWriter() {
  if (i < dialogueText.length) {
    dialogue.innerHTML += dialogueText.charAt(i++);
    setTimeout(typeWriter, 40);
  }
})();

/* NO BUTTON DRAMA */
let noCount = 0;
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
  } else if (noCount === 4) {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 60 + "%";
  } else {
    noBtn.style.display = "none";
    noText.innerText = "Bas bas… ab YES hi option hai ❤️";
  }
});

/* ROSES */
function createRose() {
  const rose = document.createElement("div");
  rose.className = "rose";
  rose.innerText = "🌹";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = 4 + Math.random() * 2 + "s";
  document.body.appendChild(rose);
  setTimeout(() => rose.remove(), 6000);
}

/* LYRICS */
const lyricsLines = [
  "Tum hi ho…",
  "Tum hi ho…",
  "Zindagi ab tum hi ho 💖",
  "",
  "Chain bhi, mera dard bhi…",
  "Meri aashiqui ab tum hi ho 🌹"
];

let l = 0;
function showLyrics() {
  if (l < lyricsLines.length) {
    lyrics.innerHTML += lyricsLines[l++] + "<br>";
    setTimeout(showLyrics, 1200);
  }
}

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  card.style.display = "none";
  final.style.display = "block";

  music.play();

  confetti({
    particleCount: 200,
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
  }, 4000);
});
