
// #################################### CREATING NAVIGATION BAR #####################################################
function openNav() {
  var hand_burger = document.getElementById("hand_burger");
  var wrapper = document.getElementById("wrapper");
  wrapper.classList.toggle("showNav")
  hand_burger.classList.toggle("show");
}
// #################################### END OF NAVIGATION BAR #####################################################

// #################################### CREATING OF LANDING CONTAINER #####################################################
var start;
var slideIndex = 0;
function slideDot(n) {
  mySlide_show(slideIndex = n)
}
function mySlide_show() {

  var slideshow_item = document.getElementsByClassName("slideshow_item");
  var slide_dot = document.getElementsByClassName("slide_dot");

  if (slideIndex > slideshow_item.length) { slideIndex = 1 }
  for (var i = 0; i < slideshow_item.length; i++) {
    slideshow_item[i].style.display = "";
  }

  for (i = 0; i < slide_dot.length; i++) {
    slide_dot[i].className = slide_dot[i].className.replace(" dot_active", "");
  }

  slideshow_item[slideIndex - 1].style.display = "flex";
  slide_dot[slideIndex - 1].className += " dot_active";

}

function myMain(){
  slideIndex++;
  mySlide_show()
  start = setTimeout(myMain, 5000)
}
myMain()
var slideshow_section = document.getElementById("slideshow_section");
slideshow_section.onmouseenter = function () {
  clearTimeout(start);
}
slideshow_section.onmouseleave = function () {
  setTimeout(myMain, 5000)
}

// #################################### END OF LANDING CONTAINER #####################################################

// #################################### Creating SHOWING CONTAINER#####################################################
document.body.addEventListener("click", e => {
  var button = e.target.matches("[data-btn]");
  var show_sort;
  if (!button && e.target.closest("[data-dropdown]") != null) return;
  if (button) {
    show_sort = e.target.closest("[data-dropdown]");
    show_sort.classList.toggle("toggle_show");
  }

  document.querySelectorAll("[data-dropdown].toggle_show").forEach(drops => {
    if (drops === show_sort) {
      return;
    } else {
      drops.classList.remove("toggle_show");
    }
  });

});

function mySort(k) {
  var sort_btn = document.getElementById("sort_c");
  var sort_container = document.getElementById("sort_container");
  sort_container.classList.remove("toggle_show")
  sort_btn.innerHTML = k.innerHTML;
}
// #################################### END OF SHOWING CONTAINNER #####################################################

var arrowStart = 0;
myArrows(arrowStart);
function myArrow(n) {
  myArrows(arrowStart += n)
}
function myArrows() {
  var last1 = document.getElementById("last1");
  var last2 = document.getElementById("last2");
  var dont_miss_long = document.getElementById("dont_miss_long");
  var miss_container = document.getElementsByClassName("miss_container");
  if (arrowStart > miss_container.length - 1) {
    arrowStart = 3;
  }
  if (arrowStart > miss_container.length - 2) {
    last2.style.opacity = "0.5";
    last2.style.cursor = "no-drop";
  } else {
    last2.style.cursor = "pointer";
    last2.style.opacity = "1";
  }
  if (arrowStart < 1) {
    arrowStart = 0;
    last1.style.opacity = "0.5";
    last1.style.cursor = "no-drop";
  } else {
    last1.style.opacity = "1";
    last1.style.cursor = "pointer";
  }
  dont_miss_long.style.transform = "translateX(" + arrowStart * -20 + "%" + ")";

}


function himFilter(con, nak) {
  var for_him_responsive = document.getElementsByClassName("him_changing");
  var himButton = document.getElementsByClassName("himButton");
  var i;
  for (i = 0; i < himButton.length; i++) {
    himButton[i].style.color = "";

  }

  nak.style.color = "#FD7D00"
  for (i = 0; i < for_him_responsive.length; i++) {
    for_him_responsive[i].style.display = "";
    if (for_him_responsive[i].className.indexOf(con) > -1) {
      for_him_responsive[i].style.display = "block"
    }
    if (con === 'all') {
      for_him_responsive[i].style.display = "block";
    }
  }

}
document.getElementById("all").click();



function sheFilter(cons,naks){
  var for_him_responsive = document.getElementsByClassName("for_her_responsive");
  var himButton = document.getElementsByClassName("herButton");
  var i;
  for (i = 0; i < himButton.length; i++) {
    himButton[i].style.color = "";

  }
  // this.style.opacity="1"
  naks.style.color = "#FD7D00"
  for (i = 0; i < for_him_responsive.length; i++) {
    for_him_responsive[i].style.display = "";
    if (for_him_responsive[i].className.indexOf(cons) > -1) {
      for_him_responsive[i].style.display = "block"
    }
    if (cons === 'alls') {
      for_him_responsive[i].style.display = "block";
    }
  }
}
document.getElementById("alls").click();

var top = document.getElementById("topss");
var scroll_container = document.getElementById("scroll_container");
window.onscroll= function(){myWinScroll()}

function myWinScroll(){
 if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20){
  scroll_container.style.bottom="10%";
 }else{
  // scroll_container.style.bottom="";
 }
}

document.getElementById("topss").addEventListener("click", function(){
  window.scrollTo(0,0)
})