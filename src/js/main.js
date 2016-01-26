

$(document).on('ready', function() {
  console.log('sanity check!');
  $('#billing-same').on('click',function() {
    var firstName = $("#firstNameShipping").val();
    var firstNameBilling = $("#firstNameBilling").val(firstName);

    var lastName = $("#lastNameShipping").val();
    var lastNameBilling = $("#lastNameBilling").val(lastName);



    });
});
