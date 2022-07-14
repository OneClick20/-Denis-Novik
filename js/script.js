$(function()
{
  var header = $("#header"),
      introH = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop();

      /*SMOOTH SCROLL*/

      $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");

            $("html, body").animate({scrollTop: blockOffset}, 500);
      });

/*MENU NAV TOGGLE*/

$("#nav_toggle").on("click", function(event) {
  event.preventDefault();
  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
});

});
