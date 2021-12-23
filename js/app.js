(function ($){

// Background imeage connection
$("[data-background]").each(function(){
    $(this).css("background-image", "url("+$(this).attr("data-background")+")")
})
// counter plugin



$(function(){
  $('.count-num').rCounter({
    duration: 40
  });

});

// magnifi popup

$('.video').magnificpopup({
  type:'ifream'
})






})(jQuery);


// wow js

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       100,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();