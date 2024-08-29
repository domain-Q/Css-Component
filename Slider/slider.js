const slide = document.querySelectorAll(".slide");
let counter = 0;
slide.forEach((slide, index) => {
  slide.computedStyleMap.left = `${index * 100}%`;
});
