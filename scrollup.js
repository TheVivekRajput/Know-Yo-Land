/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        // $("html, body").animate({ scrollTop: 0 }, "slow");
        $("html").animate({ scrollTop: 0 }, 100);
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/


/*commit changes*/
