const backdrop = document.querySelector(".backdrop");
const btnClose = document.querySelector(".modal-btn-close");
// Якщо буде окрема кнопка відкриття, теж додаємо:
const btnOpen = document.querySelector(".modal-btn-open");

const toggleModal = () => {
  backdrop.classList.toggle("is-hidden");
};

btnClose.addEventListener("click", toggleModal);
btnOpen?.addEventListener("click", toggleModal); // ? — щоб не було помилки, якщо немає кнопки
