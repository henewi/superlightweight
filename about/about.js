// PRELOADER SECTION // 

const fadeOut = () => {
    const loaderWrapper =
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);

// UNHIDE //

var div = document.querySelector(".hiddentext");
var btn = document.querySelector(".button1");
btn.addEventListener("click", function(){
  div.classList.add("elementToFadeInAndOut");
});

// HIDE //

var div2 = document.querySelector(".contents");
var btn = document.querySelector(".button1");
btn.addEventListener("click", function(){
  div2.classList.add("elementFadeOut");
});