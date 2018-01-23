(function(){

  var sections = document.getElementsByTagName('section');

  for( var i = 0; i < sections.length; i++ ){

    sections[i].style.minHeight = window.innerHeight + "px";

  }

}());

// Código base em: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "")
    {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        window.location.hash = hash;
      });
    }
  });
});