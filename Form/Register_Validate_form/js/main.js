$(document).ready(function() {
    $("#register-form").on("submit", function() {
        var idValid = true;
        if ($("#name").val().trim() == '') {
            $("#name").attr("placeholder", "Please Enter Your Name !");
            idValid = false;
        } else {
            $("#name").attr("placeholder", "");;
        }
        if ($("#pass").val().match(/^.{4,8}$/) == null) {
            $("#pass").attr("placeholder", "Please Enter Your Password !");
            idValid = false;
        } else {
            $("#pass").attr("placeholder", "");;
        }
        if ($("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
            $("#email").attr("placeholder", "Please Enter Your Email !");
            idValid = false;
        } else {
            $("#email").attr("placeholder", "");;
        }
        if ($("#address").val().trim() == '') {
            $("#address").attr("placeholder", "Please Enter Your Address !");
            idValid = false;
        } else {
            $("#address").attr("placeholder", "");;
        }
        if ($("#phone").val().match(/^([\(]{1}[0-9]{3}[\)]{1}[\.| |\-]{0,1}|^[0-9]{3}[\.|\-| ]?)?[0-9]{3}(\.|\-| )?[0-9]{4}$/) == null) {
            $("#phone").attr("placeholder", "Please Enter Your Phone Number !");
            idValid = false;
        } else {
            $("#phone").attr("placeholder", "");;
        }
        if ($("#linkFB").val().match(/(?<http>(http:[/][/]|www.)([a-z]|[A-Z]|[0-9]|[/.]|[~])*)/) == null) {
            $("#linkFB").attr("placeholder", "Please Enter Your Link Facebook !");
            idValid = false;
        } else {
            $("#linkFB").attr("placeholder", "");;
        }

        let gender = $('.gender').val();
        if ($(".gender:checked").length > 1 || $(".gender:checked").length == 0) {
            $('.genderinfo').css("border-color", "red");
            idValid = false;
        } else {
            $('.genderinfo').css("border-color", "black");
        }

        if ($("#date").val().trim() == '') {
            $("#date").css("border-color", "red");
            idValid = false;
        } else {
            $("#date").css("border-color", "black");
        }
        return idValid;
    });
})

function myFunction() {
    let uri = document.URL;
    let urinew = document.URL.split('?')[0];
    let uri_dec = decodeURIComponent(uri);
    let content = uri_dec.replace(/[&?]/g, '<br/>').replace(/[+]/g, ' ').replace(/[=]/g, ': ').replace('signup: Sign Up', '');
    let total = content.replace(urinew, '').replace(/date/g, 'Date').replace(/gender/g, 'Gender').replace(/address/g, 'Address').replace(/phone/g, 'Phone').replace(/facebook/g, 'Facebook');
    $("#username").html(total);
}