$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var myLink = $('#my-link');
    
    envelope.click( function() {
        if (envelope.hasClass("close")) {
            open();
        } else {
            close();
        }
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
        myLink.show();
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
        myLink.hide();
    }
});