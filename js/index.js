/*
* @Author: Phinoda
* @Date:   2016-01-28 19:46:09
* @Last Modified by:   Yiqin Dai
* @Last Modified time: 2018-03-10 17:46:13
*/

'use strict';
$(document).ready(function(){

/*smooth scroll*/
$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projectsSection").offset().top
    }, 500, "swing");
});

$("#playground").click(function() {
    $('html, body').animate({
        scrollTop: $("#playgroundSection").offset().top
    }, 500, "swing");
});

});
