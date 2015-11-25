(function(){

  var sections = document.getElementsByTagName('section');

  for( var i = 0; i < sections.length; i++ ){

    sections[i].style.minHeight = window.innerHeight + "px";

  }

}());
