$(document).ready(function () {
    $('body').css('background-image', 'url(background.jpg)');
    $('body').css('background-size', 'cover');

    $(".show-password, .hide-password").on('click', function () {
        if ($(this).hasClass('show-password')) {
            $("#password").attr("type", "text");
            $(this).parent().find(".show-password").hide();
            $(this).parent().find(".hide-password").show();
        } else {
            $("#password").attr("type", "password");
            $(this).parent().find(".hide-password").hide();
            $(this).parent().find(".show-password").show();
        }
    });

    $("#check").change(function () {
        $("#btncheck").prop("disabled", !this.checked);
    }).change();

    $("textarea[maxlength]").on("propertychange input", function () {
        if (this.value.length > this.maxlength) {
            this.value = this.value.substring(0, this.maxlength);
        }
    });

    $("#text").on("input", function () {
        // var maxlength = $(this).attr("maxlength");
        var currentLength = $(this).val().length;

        $("#maxlength").text(currentLength);
    });
});