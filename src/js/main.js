

$(document).on('ready', function() {
  console.log('sanity check');
  $('#billing-same').on('click',function() {
    var firstName = $("#firstNameShipping").val();
    var firstNameBilling = $("#firstNameBilling").val(firstName);

    var lastName = $("#lastNameShipping").val();
    var lastNameBilling = $("#lastNameBilling").val(lastName);



    });

  var $btns = $('.hover');
    $btns.hide();

  $('.thumbnail').hover(function() {

    $(this).find($btns).show(500);
    console.log($(this).children());
    // $('div').css('position', 'relative');
    $('.btnContainer').css({top: '160px', left: '88px', opacity: '.8', position:'absolute'});
    // console.log('works!');
  },
  function(){
      $(this).find($btns).hide(500);
  });
});
