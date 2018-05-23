$(function(){
    $(".bash").typed({
        strings: ["dog metadata", "^300 cat ^300 metadata.txt"],
        typeSpeed: 0.2,
        backDelay: 200,
        callback: function() {
            $("#about").show();
            $("#terminal").hide();
        },
    });
});