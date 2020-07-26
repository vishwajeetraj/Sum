$(document).ready(function(){
	 $(".form-check").on("keyup", function() {
        $('#ajaxResponseDiv').html('');
    });
});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function contactForm() {    
    var name = $('#contact_name').val();
    var email = $('#contact_email').val();        
    var mobile = $('#contact_mobile').val();
    var message  = $('#contact_message').val();
    if (name == "") {
        $('#ajaxResponseDiv').html('');
        $('#ajaxResponseDiv').html('Please Enter Name.');         
    } else if (mobile == "") {
        $('#ajaxResponseDiv').html('');
        $('#ajaxResponseDiv').html('Please Enter Mobile Number.');         
    } else if (mobile.length < 10) {
        $('#ajaxResponseDiv').html('');
        $('#ajaxResponseDiv').html('Please Enter Valid Mobile Number.');           
    } else if (email == "") {
        $('#ajaxResponseDiv').html('');
        $('#ajaxResponseDiv').html('Please Enter Email.');
    } else if (!isEmail(email)) {
        $('#ajaxResponseDiv').html('');
        $('#ajaxResponseDiv').html('Please Enter Valid Email.');           
    } else if (message == '') {
            $('#ajaxResponseDiv').html('');
            $('#ajaxResponseDiv').html('Please Enter message.');      
    } else {                   
        $('#submit-btn').attr('disabled','disabled');    
        $('#submit-btn').text('Submitting!...');
        var form = $('#form')[0]; 
        var formData = new FormData(form);
        // console.log(formData);
        // return;
        $.ajax({
            type: "post",
            url: BASE_URL + "api/send_message",
            data: formData,
            processData: false,
            contentType: false,       
            success: function (response) {
            	//console.log('sssssssssssss');
                if(response.status) {
                    $('#ajaxResponseDiv').html('');
                    $('#ajaxResponseDiv').css('color','#4bb543');
                    $('#ajaxResponseDiv').html('Thank you for sharing details with us. We will contact you shortly.');
                    $('#submit-btn').attr('disabled', false);
                    $('#submit-btn').text('Submit');
                }

            },
            error : function () {

            }
        });

        $('#form').each(function() {
            this.reset();
        });
    }
} 