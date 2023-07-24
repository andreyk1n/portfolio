const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";

  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)

// -----------------

const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      let animItem = animItems[i]
      let animItemHeight = animItem.offsetHeight
      let animItemOffset = offset(animItem).top
      let animStart = 6 // коефіцієнт прокрутки елемента 

      let animItemPoint = window.innerHeight - animItemHeight / animStart

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active')
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active')
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  setTimeout(() => {
    animOnScroll()
  }, 200);

}


// // Відкриття/закриття модального вікна
// const contactBtn = document.querySelector(".contactBtn");
// const contactModal = document.getElementById("contactModal");
// const closeBtn = contactModal.querySelector(".close");

// contactBtn.addEventListener("click", () => {
//   contactModal.style.display = "block";
// });

// closeBtn.addEventListener("click", () => {
//   contactModal.style.display = "none";
// });

// // Закриття модального вікна при кліку за його межі
// window.addEventListener("click", (event) => {
//   if (event.target === contactModal) {
//     contactModal.style.display = "none";
//   }
// });

// Відкриття/закриття модального вікна
const contactBtns = document.querySelectorAll(".contactBtn");
const contactModal = document.getElementById("contactModal");
const closeBtn = contactModal.querySelector(".close");

contactBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    contactModal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  contactModal.style.display = "none";
});

// Закриття модального вікна при кліку за його межі
window.addEventListener("click", (event) => {
  if (event.target === contactModal) {
    contactModal.style.display = "none";
  }
});

