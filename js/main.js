$(document).ready(function() {

  $('#menu-button').click(function(){
    if ($('#mobile').hasClass('animated fadeInDown')) {
      $('#ham1, #ham2 , #ham3').removeClass('expanded');
      $('#mobile').removeClass('animated fadeInDown');
      $('.mobile-navigation').css("height","50px");
      $('.mobile-navigation ul').css("visibility","hidden");
    }
    else {
      $('#ham1, #ham2 , #ham3').addClass('expanded');
      $('.mobile-navigation').css("height","250px");
      $('#mobile').addClass('animated fadeInDown');
      $('.mobile-navigation ul').css("visibility","visible");
    }
  })

  $("#hello").addClass("hidden").delay(3000).queue(function() {
    $(this).removeClass("greet").dequeue();

  });

  setTimeout(function() {
    $('#name-title').removeClass("hide");
  }, 3000);

  setTimeout(function() {
    $('#job-title').removeClass("hide");
  }, 4000);

  $(window).scroll(function(){
    var scrollPos = $(document).scrollTop();
    /*console.log(scrollPos);*/

    if (scrollPos > $('#page-header').offset().top - 100) {
      $('#nav-menu li').removeClass('active');
      $('#header-button').addClass('active');
    }

    if (scrollPos > $('#section-a').offset().top -100) {
      $('#nav-menu li').removeClass('active');
      $('#s-a').addClass('active');
    }

    if (scrollPos > $('#section-b').offset().top -100) {
      $('#nav-menu li').removeClass('active');
      $('#s-b').addClass('active');
    }

    if (scrollPos > $('#section-c').offset().top -100) {
      $('#nav-menu li').removeClass('active');
      $('#s-c').addClass('active');
    }

});


})
