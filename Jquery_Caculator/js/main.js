$(document).ready(function() {
    let display = $("#textview").val();
    $("button.number").on("click", function() {
        let number = $(this).html();
        display = $("#textview").val();
        $("#textview").val(display += number);
    });
    $(".clean").on("click", function() {
        $("#textview").val("");
    });
    $(".back").on("click", function() {
        let str = $("#textview").val();
        $("#textview").val(str.substring(0, str.length - 1));
    });
    $(".operation").on("click", function() {
        let operation = $(this).val();
        $("#textview").val((display += operation));
    });
    $(".dot").on("click", function() {
        let dot = $(this).html();
        $("#textview").val((display += dot));
    });
    $(".equals").on("click", function() {
        $("#textview").val(eval(display));
    });
    $(".percent").on("click", function() {
        $("#textview").val(display / 100);
    });
    $(".powerButton").on("click", function() {
        $("#textview").val(Math.pow(display, 2));
    });
    $(".sqrtButton").on("click", function() {
        $("#textview").val(Math.sqrt(display));
    });
    $(".piButton").on("click", function() {
        $("#textview").val(Math.PI);
    });
    $(".cosButton").on("click", function() {
        $("#textview").val(Math.cos(display));
    });
    $(".toggle").on("click", function() {
        $('.main').toggleClass('clicked');
        $('.wrap').toggleClass('clicked');
        $('body').toggleClass('clicked');
    });
});