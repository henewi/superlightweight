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
        // event.preventDefault()
        console.log('CLICKED')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>email is valid</div>')
        }
        else {
            event.preventDefault()
            statusElm.append('<div>email is not valid</div>')
        }

        if(subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        }
        else {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }

        if(message.length > 0) {
            statusElm.append('<div>Message is valid</div>')
        }
        else {
            event.preventDefault()
            statusElm.append('<div>Message is empty</div>')
        }
    })
})