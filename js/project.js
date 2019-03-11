/*
* @Author: Yiqin Dai
* @Date:   2018-03-10 17:38:42
* @Last Modified by:   Yiqin Dai
* @Last Modified time: 2018-03-26 02:55:50
*/
'use strict';
$(document).ready(function(){
	//show subnav later
	$('.subnav').hide();
	$(document).scroll(function () {
        var y = $(this).scrollTop();
        var x = $(".content").offset();
        if (y >x.top) {
            $('.subnav').fadeIn();
        }
        else {
            $('.subnav').fadeOut();
        }
    });
/*smooth scroll*/
$("#project_description").click(function() {
    $('html, body').animate({
        scrollTop: $(".project_description_section").offset().top-150
    }, 500, "swing");
});

$("#assumption").click(function() {
    $('html, body').animate({
        scrollTop: $(".assumption_section").offset().top-150
    }, 500, "swing");
});

$("#design_requirements").click(function() {
    $('html, body').animate({
        scrollTop: $(".design_requirements_section").offset().top-150
    }, 500, "swing");
});

$("#design_process").click(function() {
    $('html, body').animate({
        scrollTop: $(".design_process_section").offset().top-150
    }, 500, "swing");
});

$("#solution").click(function() {
    $('html, body').animate({
        scrollTop: $(".solution_section").offset().top-150
    }, 1000);
});

$("#challenge").click(function() {
    $('html, body').animate({
        scrollTop: $(".challenge_section").offset().top-150
    }, 1000);
});

$("#result").click(function() {
    $('html, body').animate({
        scrollTop: $(".result_section").offset().top-150
    }, 1000);
});

$("#outcome").click(function() {
    $('html, body').animate({
        scrollTop: $(".outcome_section").offset().top-150
    }, 1000);
});

});
