var content = $('#dropdownContent'),
    button = $('#dropdownButton');
 
$(document).ready(function() {
  button.mouseenter(function() {
    content.slideDown();
    if (window.matchMedia("(max-width: 831px)").matches) {
      $('.nav-item:eq(2) a:eq(0)').css('color','black');
      $('.nav-item:eq(2) a:eq(0) span').css({'text-decoration': 'underline', 'color': 'black'});
    }
  });
  content.mouseleave(function() {
    content.slideUp();
    $('.nav-item:eq(2) a:eq(0)').removeAttr('style');
    $('.nav-item:eq(2) a:eq(0) span').removeAttr('style');
  });
  $('.nav-item:nth-child(2), .nav-item:nth-child(4)').mouseenter(function() {
    content.slideUp();
    $('.nav-item:eq(2) a:eq(0)').removeAttr('style');
    $('.nav-item:eq(2) a:eq(0) span').removeAttr('style');
  });
});