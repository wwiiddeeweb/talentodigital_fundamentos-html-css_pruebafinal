$(document).ready(function(){

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('a').click(function() {
    var vinculoMenu = this.hash 
    $('html, body').animate(
      {
        scrollTop: $(vinculoMenu).offset().top - 80
      },
      600
    )

  })

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  
})