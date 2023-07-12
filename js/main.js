let navToggle = document.getElementById("nav_toggle");
let navMenu = document.getElementById("nav_menu");
let navClose = document.getElementById("nav_close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});
// localSrorag는 웹브라우저에서 제공하는 웹 스토리지 기술 중 하나. 웹에서 데이터를 클라이언트(자기피씨) 측에 영구적으로 저장할 수 있게 해주는 저장소.

// 배경 테마 변경(배경색 변경)
let themeButton = document.getElementById("theme-button");
let darkTheme = "dark-theme";
let iconTheme = "ri-sun-line";

let getCurrentTheme = () => {
  let result = document.body.classList.contains(darkTheme) ? "dark" : "light";
  return result;
};
let getCurrentIcon = () => {
  let result = themeButton.classList.contains(iconTheme) ?
    "ri-moon-line" :
    "ri-sun-line";
  return result;
};

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //웹 스토어에 값 세팅
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");
console.log(selectedTheme);

if (selectedTheme) {
  if (selectedTheme == 'dark') {
    document.body.classList.add(darkTheme);
  } else {
    document.body.classList.remove(darkTheme);
  }

  if (selectedIcon == 'ri-moon-line') {
    themeButton.classList.add(iconTheme);
  } else {
    themeButton.classList.remove(iconTheme);
  }
}


// header
let scrollHeader = () => {
  //let header=document.querySelector('#header');
  let header = document.getElementById("header");
  pageYOffset >= 50 ?
    header.classList.add("bg-header") :
    header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);


//scroll reveal  https://scrollrevealjs.org/
ScrollReveal().reveal('.home_img,.home_data,.about_data,.about_img,.recently_data,.recently_img,.popular_card,.footer_description,.footer_content,.footer_info ', {
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
});

ScrollReveal().reveal('.home_data', {
  origin: 'bottom'
});
ScrollReveal().reveal('.about_data,.recently_data', {
  origin: 'left'
});
ScrollReveal().reveal('.about_img,.recently_img', {
  origin: 'right'
});
ScrollReveal().reveal('.popular_card', {
  interval: 100
});

//scroll-up
// window.addEventListener("scroll",()=>{
//   scrollup()
// }) -> 아래와 같이 축소시킬 수 있음.
// window.addEventListener("scroll",scrollup)

let scrollup = () => {
  let scrollup = document.getElementById("scroll-up");
  pageYOffset >= 350 ?
    scrollup.classList.add('show-scroll') :
    scrollup.classList.remove('show-scroll');
}

window.addEventListener("scroll", scrollup)


//menu

let scrollActive = () => {
  let scrollY = pageYOffset
  // console.log(scrollY)
  let sections = document.querySelectorAll("section[id]") //섹션 태그 중에 id를 가지고 있는 것
  // console.log(sections)

  // sections.forEach((아이템, 아이템 인덱스 번호) => {})  - > sections의 아이템 각각이 할 일
  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    // console.log(sectionHeight)
    let sectionTop = current.offsetTop - 60; //자신의 영역이 시작되는 지점. 나의 머리가 천장에 닿는 지점.
    let sectionId = current.getAttribute("id");
    // console.log(sectionId)

    let sectionClass = document.querySelector(`.nav_menu a[href*='${sectionId}'`);
    console.log(sectionClass)

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  })
}

window.addEventListener("scroll", scrollActive)