

$(document).on('ready', function() {
  console.log('sanity check');
  // var options = { $AutoPlay: true };
  // var jssor_slider1 = new $JssorSlider$('slider1_container', options);

  $('#billing-same').on('click',function() {
    var firstName = $("#firstNameShipping").val();
    var firstNameBilling = $("#firstNameBilling").val(firstName);

    var lastName = $("#lastNameShipping").val();
    var lastNameBilling = $("#lastNameBilling").val(lastName);

    var company =$('#companyShip').val();
    var companyBill=$('#companyBill').val(company);

    var address1=$('#address1Ship').val();
    var address1Bill=$('#address1Bill').val(address1);

    var address2=$('#address2Ship').val();
    var address2Bill=$('#address2Bill').val(address2);

    var stateShip = $('#stateShip').val();
    var stateBill = $('#stateBill').val(stateShip);

    var zip = $('#zipShip').val();
    var zipBill = $('#zipBill').val(zip);
  });


//button hover functionality
  
  var $btns = $('.hover');
  $btns.hide();

  $('.thumbnail').hover(function() {

    $(this).find($btns).show(500);
    // console.log($(this).children());
    // $('div').css('position', 'relative');
    $('.btnContainer').css({top: '160px', left: '88px', opacity: '.8', position:'absolute'});
    // console.log('works!');
  },
  function(){
      $(this).find($btns).hide(500);
  });
//end button hover functionality

//email validation

  $('form').on('submit', function(){
    event.preventDefault();
    var $email = $('input[name="email"]');
    // console.log($email.val());
    if(validateEmail($email.val())){
      $email.val('');
      $('p').remove();
      $('.well-lg').append('<p class="sucka">Thanks, Sucka! You shall now receive Spam!</p>');
      $email.removeClass('invalidEmail');
    } else {
      $('p').remove();
      $email.addClass('invalidEmail');
      $('.well-lg').append('<p class="sucka">Thanks for playing, better luck next time!</p>');
    }
  });

  function validateEmail (str) {
    // body...
    var emailPatten = /^([\w\.\-\+_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm
    return emailPatten.test(str);
  }


});


  
      