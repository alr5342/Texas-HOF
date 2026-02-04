const startBtn = document.getElementById("startBtn");
const hero = document.getElementById("hero");
const hall = document.getElementById("hall");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

const ids = ["m1","m2","m3","m4","m5","m6","m7","m8","m9"];
let index = -1;
let active = false;

function reveal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("locked");

  const anchor = el.querySelector(".center-anchor");
  const target = anchor || el;

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  });
}

function updateArrows() {
  prevArrow.classList.toggle("disabled", index <= 0);
  nextArrow.classList.toggle("disabled", index >= ids.length - 1);
}

function goTo(i) {
  index = Math.max(0, Math.min(ids.length - 1, i));
  reveal(ids[index]);
  updateArrows();
}

function goNext() {
  if (index < ids.length - 1) goTo(index + 1);
}

function goPrev() {
  if (index > 0) goTo(index - 1);
}

startBtn.addEventListener("click", () => {
  hero.classList.add("fade-out");

  setTimeout(() => {
    hero.classList.add("hidden");

    hall.classList.remove("hidden");
    hall.classList.add("fade-in");

    document.body.classList.add("in-hall");

    prevArrow.classList.remove("hidden");
    nextArrow.classList.remove("hidden");

    active = true;
    goTo(0);
  }, 520);
});

nextArrow.addEventListener("click", goNext);
prevArrow.addEventListener("click", goPrev);

document.addEventListener("keydown", (e) => {
  if (!active) return;

  if (e.key === "ArrowRight") {
    e.preventDefault();
    goNext();
  }

  if (e.key === "ArrowLeft") {
    e.preventDefault();
    goPrev();
  }
});
