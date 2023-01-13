// PRELOADER SECTION // 

const fadeOut = () => {
    const loaderWrapper =
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);

// UNHIDE //

function showHideDiv(ele) {
    var srcElement = document.getElementById(ele);
    if (srcElement != null) {
        if (srcElement.style.display == "block") {
            srcElement.style.display = 'none';
        }
        else {
            srcElement.style.display = 'block';
        }
        return false;
    }
}