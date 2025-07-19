const openBtn = document.getElementById("openModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modal = document.getElementById("modal");

function openModal() {
  modalOverlay.classList.add("active");
  // С небольшой задержкой, чтобы .modal успел появиться в DOM
  requestAnimationFrame(() => {
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
}

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");

  // Ждём завершения анимации перед скрытием
  setTimeout(() => {
    modalOverlay.classList.remove("active");
  }, 300);
}

openBtn.addEventListener("click", openModal);

// Закрытие по клику вне модалки
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Закрытие по свайпу вниз
let startY = null;

modal.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

modal.addEventListener("touchmove", (e) => {
  if (!startY) return;
  const endY = e.touches[0].clientY;
  const diffY = endY - startY;
  if (diffY > 100) {
    closeModal();
    startY = null;
  }
});

modal.addEventListener("touchend", () => {
  startY = null;
});
