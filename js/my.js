$(document).ready(function(){
    $(this).scrollTop(0);
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});