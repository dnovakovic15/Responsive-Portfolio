$("#more").click(function() {
    $('html, body').animate({
        scrollTop: $("#second-view").offset().top
    }, 2000);
});

$('.contact-button').click(function(){
   window.location.href='https://www.linkedin.com/in/darko-novakovic/';
})