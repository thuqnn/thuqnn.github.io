$(document).ready(function() {
    $("#register-form").on("submit", function() {
        var idValid = true;
        if ($("#name").val().trim() == '') {
            $("#name").next('small').text('Enter Name !');
            idValid = false;
        } else {
            $("#name").next('small').text('');
        }
        if ($("#pass").val().match(/^.{4,8}$/) == null) {
            $("#pass").next('small').text('Enter Pass !');
            idValid = false;
        } else {
            $("#pass").next('small').text('');
        }
        if ($("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
            $("#email").next('small').text('Enter Email !');
            idValid = false;
        } else {
            $("#email").next('small').text('');
        }
        if ($("#address").val().trim() == '') {
            $("#address").next('small').text('Enter Address !');
            idValid = false;
        } else {
            $("#address").next('small').text('');
        }
        if ($("#phone").val().match(/^([\(]{1}[0-9]{3}[\)]{1}[\.| |\-]{0,1}|^[0-9]{3}[\.|\-| ]?)?[0-9]{3}(\.|\-| )?[0-9]{4}$/) == null) {
            $("#phone").next('small').text('Enter Number Phone !');
            idValid = false;
        } else {
            $("#phone").next('small').text('');
        }
        if ($("#linkFB").val().match(/(?<http>(http:[/][/]|www.)([a-z]|[A-Z]|[0-9]|[/.]|[~])*)/) == null) {
            $("#linkFB").next('small').text('Enter Link FaceBook !');
            idValid = false;
        } else {
            $("#linkFB").next('small').text('');
        }

        let gender = $('.gender').val();
        if ($(".gender:checked").length > 1 || $(".gender:checked").length == 0) {
            $('#error').html('<span id="error"> Please choose a gender !</span>');
            idValid = false;
        } else {
            $('#error').html('');
        }

        if ($("#date").val().trim() == '') {
            $("#date").next('small').text('Select Date of Birth !');
            idValid = false;
        } else {
            $("#date").next('small').text('');
        }
        return idValid;
    });
})

function myFunction() {
    let uri = document.URL;
    let uri_dec = decodeURIComponent(uri);
    let content = uri_dec.replace(/[&?]/g, '<br/>').replace(/[+=]/g, ' ');
    $("#username").html(content);
}