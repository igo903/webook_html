// popup
/**
 * show popup
 * selector - the jQuery selector of the popup
 */
 $(function () {

  var showPopup = function(selector) {
    var body = $('body');
    var popupW = $(window).width()+"px";
    $('.popup').css('width',popupW);
    $('.alpha').width(body.width()).height(body.height()).css('display', 'block');
    var popup = $(selector);
    popup.css('display', 'block').css('margin', -popup.height() / 2 + 'px 0 0 ' + (-popup.width() / 2) + 'px');
  };
  $('.popup .close-btn, .alpha').bind('click', function() {
    $('.alpha').css('display', 'none');
    $('.popup').css('display','none');
    $(this).parents('.popup').css('display', 'none');

  });

  $('.play-button').bind('click', function(){
    showPopup('.video-popup-modal');
  });


})
