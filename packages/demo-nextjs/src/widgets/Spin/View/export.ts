document.addEventListener("DOMContentLoaded", () => {
  const spins = document.querySelectorAll<HTMLDivElement>(".spin-wheel-container");

  spins.forEach((spin) => {
    const spinButton = spin.querySelector<HTMLButtonElement>(".spin-button");
    const wheel = spin.querySelector<HTMLDivElement>(".wheel");
    const resultDisplay = spin.querySelector<HTMLDivElement>(".result");
    const items = spin.querySelectorAll<HTMLDivElement>(".wheel-item");

    if (!spinButton || !wheel || !resultDisplay) {
      console.error("One or more elements not found");
      return;
    }

    let spinning = false;
    let rotation = 0;

    spinButton.addEventListener("click", () => {
      if (spinning) {
        return;
      }

      spinning = true;
      spinButton.disabled = true;
      resultDisplay.style.display = "none";
      resultDisplay.textContent = "";

      const randomIndex = Math.floor(Math.random() * items.length);
      const extraSpins = 5 * 360; // 5 full rotations
      const finalAngle = (360 / items.length) * randomIndex;
      const newRotation = rotation + extraSpins + finalAngle;

      wheel.style.transition = "transform 3s ease-out";
      wheel.style.transform = `rotate(${newRotation}deg)`;

      rotation = newRotation;

      setTimeout(() => {
        spinning = false;
        spinButton.disabled = false;
        resultDisplay.style.display = "block";
        resultDisplay.textContent = `You won: ${items[randomIndex].getAttribute("data-score")}%!`;
      }, 3000);
    });
  });
});

export {};
