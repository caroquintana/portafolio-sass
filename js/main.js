$(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                    $("nav").css('background-color', 'white');
                    $(".navbar > .container .navbar-brand").css('color', '#555555');
                    $(".navbar-default .navbar-nav > li > a").css('color', '#555555');
                    $("a.buytext").css('color', '#fff');
                } else {
                    $("nav").css('background-color', 'transparent');
                    $(".navbar > .container .navbar-brand").css('color', '#fff');
                    $(".navbar-default .navbar-nav > li > a").css('color', '#fff');
                    $("a.buytext").css('color', '#fff');
                }
            });