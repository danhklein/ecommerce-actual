function onHover (el) {
  el.hover(function(){

    if(PlayState){
          console.log(PlayState);
      $('.glyphicon-pause').show();
      $('.glyphicon-forward').show();
      $('.glyphicon-backward').show();
    } else {
      $('.glyphicon-play').show();
      $('.glyphicon-forward').show();
      $('.glyphicon-backward').show();
    }
  },
    function(){
      $('.glyphicon-pause').hide();
      $('.glyphicon-play').hide();
      $('.glyphicon-forward').hide();
      $('.glyphicon-backward').hide();
  });

  $('.image').on('click', function(){
    if(PlayState){
      clearInterval(autoSlide);
      PlayState = 0;
      // console.log(PlayState);
      $('.glyphicon-pause').hide();
      $('.glyphicon-play').show();
      $('.glyphicon-forward').show();
      $('.glyphicon-backward').show();
    } else {
        slide();
        PlayState = 1;
        // console.log(PlayState);
        $('.glyphicon-play').hide();
        $('.glyphicon-pause').show();
        $('.glyphicon-forward').show();
        $('.glyphicon-backward').show();
    }
  });
  // body...
}