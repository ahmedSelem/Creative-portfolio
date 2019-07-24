/*global js, console, $*/

(function () {
    'use strict';
    
    // Header Dynamic
    $('header').height($(window).innerHeight());
    
    var nav = $('header .header-box .navbar'),
        navForm = $('.navbar form'),
        formInput = $('.navbar form input'),
        toggle = $('.fixed-toggle'),
        fixedSpan = $('.fixed-toggle span');
    // Search Toggle 
    $('.navbar ul li:last-of-type').on('click', function () {
        $(this).toggleClass('showSearch');
        if ($(this).hasClass('showSearch')) {
            nav.animate({marginRight: 0}, 600);
            
        } else {
            nav.animate({marginRight: '-' + navForm.innerWidth()}, 600);
        }
    });
    formInput.on('blur', function () {
        nav.animate({marginRight: '-' + navForm.innerWidth()}, 600);
    });
    
    // Link ID Animate 
    $('.navbar ul li').on('click', function () {
        $('body, html').animate({
            scrollTop: $('#' + $(this).data('link')).offset().top
        }, 800);
    });
    
    // Fixed Toggle Section 
    
    if ($(window).innerWidth() > 768) {
        $('header').mousemove(function (e) {
            var movX = (e.pageX * -1 / 5),
                movY = (e.pageY * -1 / 5);
            $(this).css('background-position', movX + 'px ' + movY + 'px');
        });
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 500) {
                fixedSpan.fadeIn(500).css('display', 'block');
                toggle.fadeIn(500);
            } else {
                fixedSpan.fadeOut(500);
                toggle.fadeOut(500);
            }
        });
    } else {
        fixedSpan.fadeIn(500).css('display', 'block');
        toggle.fadeIn(500);
    }
    
    
    // Click To Toggle
    fixedSpan.on('click', function () {
        $(this).toggleClass('fixed');
        if ($(this).hasClass('fixed')) {
            toggle.animate({left: 0}, 500);
        } else {
            toggle.animate({left: '-' + toggle.innerWidth()}, 500);
        }
    });
    
    //My portfolie Opation
    $('.our-portfolie ul li').on('click', function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        
        if ($(this).data('type') === 'all') {
            $('.gallery .gallery-box').css('opacity', '1');
        } else {
            $('.gallery .gallery-box').css('opacity', '.2');
            $('.' + $(this).data('type')).css('opacity', '1');
        }
    });
    
    $('.gallery .gallery-box').hover(function () {
        $(this).find('div').animate({
            width: '100%'
        }, 600);
        $('.gallery-box .slideToggle a, .gallery-box .slideToggle i').css('display', 'inline-block');
    }, function () {
        $(this).find('div').animate({
            width: '0'
        }, 600);
        $('.gallery-box .slideToggle a, .gallery-box .slideToggle i').css('display', 'none');
    });
    
    //Section Opinion OPation
    (function () {
        setInterval(function () {
            $('.opinion .opinion-box').animate({left: '-200%'}, 500, function () {
                $(this).css('left', '-100%');
                $('.opinion-items').last().after($('.opinion-items').first());
                $('.opinion ul li').last().after($('.opinion ul li').first());
            });
        }, 4000);
    }());
    
    
}());