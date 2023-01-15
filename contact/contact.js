// PRELOADER SECTION // 

const fadeOut = () => {
    const loaderWrapper =
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);

// EMAIL SENDING SECTION //

$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('CLICKED')
    })
})