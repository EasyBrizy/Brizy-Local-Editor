document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".custom-counter");

  if (counter) {
    const count = counter.querySelector(".custom-counter__count");

    if (!count) {
      return;
    }

    counter.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const value = parseInt(count.textContent ?? "0");

      if (target.closest(".custom-counter__increment")) {
        count.innerHTML = `${value + 1}`;
      }
      if (target.closest(".custom-counter__decrement")) {
        count.innerHTML = `${value - 1}`;
      }
    });
  }
});

export {};
