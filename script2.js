// on sclorl

let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

// typing

document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#typing", {
      startDelay: 900,
  })
    .delete(null, {delay:900})
    .type("Tapi musiknya dinyalain dulu gk sih sih?", {delay:900} )
    .type(" Biar makin gereget 	&#128513")
  .go();
});
