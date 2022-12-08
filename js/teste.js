$(document).ready(function(){
    $('.galeria-dinamiqa li').click(function(){
      $('.galeria-dinamiqa li').removeClass("activeItemdinamiqo");
      $(this).addClass("activeItemdinamiqo");
    });
  });