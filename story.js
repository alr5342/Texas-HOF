const startBtn = document.getElementById("startBtn");
const timeline = document.getElementById("timeline");

function reveal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("locked");
  requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".next");
  if (!btn) return;
  reveal(btn.dataset.next);
});

startBtn.addEventListener("click", () => {
  timeline.classList.remove("hidden");
  reveal("m1");
});
