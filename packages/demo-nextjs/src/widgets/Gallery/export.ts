document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll(".gallery");
  for (const gallery of galleries) {
    initGallery(gallery);
  }
});

function initGallery(gallery: Element) {
  const images = gallery.querySelectorAll(".gallery__all-images .item");
  const bigImage = gallery.querySelector<HTMLImageElement>(".gallery__big-image img");

  gallery.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const image = target.closest(".item");
    if (!image) return;

    // set Active item
    images.forEach((image) => {
      image.classList.remove("active");
    });
    image.classList.add("active");

    // set Big image source
    if (bigImage) {
      const _src = image.querySelector("img")?.getAttribute("src");
      bigImage.src = _src ?? "";
    }
  });
}
