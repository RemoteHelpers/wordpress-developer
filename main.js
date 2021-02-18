let btn = document.querySelector(
  '.btn-burger__menu--span',
);
let block = document.querySelector(
  '.btn-burger__menu',
);
let menu = document.querySelector(
  '.header__menu',
);
block.addEventListener('click', function () {
  menu.classList.toggle('burger-menu_active');
  btn.classList.toggle('active-burger');
});

const anchors = document.querySelectorAll(
  'a[href*="#"]',
);

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor
      .getAttribute('href')
      .substr(1);

    document
      .getElementById(blockID)
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  });
}

let form1 = document.getElementById('form1');
let phpForm = document.querySelector(
  '.respond__btn',
);

let submitted = false;

const formSubmit = () => {
  let myPhone = document.querySelector(
    '.php__form--input',
  );
  let check = /^((8|\+380)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(
    myPhone.value,
  );
  if (check) {
    submitted = true;
    myPhone.classList.remove('invalid');
  } else {
    myPhone.classList.add('invalid');
  }
};
phpForm.addEventListener('click', formSubmit);

let header = document.querySelector('.header');

// window.addEventListener('scroll', function () {
//   let scrollTop =
//     document.documentElement.scrollTop ||
//     document.body.scrollTop;
//   if (scrollTop > 200) {
//     header.style.backgroundColor = 'white';
//   }
// });
