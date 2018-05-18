function loginSubmit() {
    $("#input-fields").fadeOut(200, () => {
        $("#loading").fadeIn(200);
        window.setTimeout(() => {
            $("#loading").fadeOut(500, () => $("#success").css("top","-20px"));
            $("#success").fadeIn(500);
        }, 1000);
    });
}