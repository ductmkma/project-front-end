$(function() {
   $('.logo').click(function(){
        location.href="home.html";
     });
    //Hover menu
    $('#sub-blog').mousemove(function() {
        $('#sub-blog').prev().css({
            'color': '#f03c0b'
        });
    });
    $('#sub-page').mousemove(function() {
        $('#sub-page').prev().css({
            'color': '#f03c0b'
        });
    });
    $('#sub-blog').mouseleave(function() {
        $('#sub-blog').prev().css({
            'color': ''
        });
    });
    $('#sub-page').mouseleave(function() {
        $('#sub-page').prev().css({
            'color': ''
        });
    });
    //Hết hover menu
    //check email

    $('#ip-email').keyup(function() {
        var regular = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = $('#ip-email').val();
        if (!regular.test(email)) {
            $('#in-err-email').html('Please enter a valid email format !');
            $('#ip-email').css({ 'border-color': 'red' });
            $('#icon-email').css({ 'display': 'none' });
        } else {
            $('#in-err-email').html('');
            $('#ip-email').css({ 'border-color': 'white' });
            $('#icon-email').css({ 'display': 'block' });
        }
    });
    $('#ip-email').blur(function() {
        var email = $('#ip-email').val();
        if (email.length == 0) {
            $('#in-err-email').html('Please enter the field !');
        }
    });


    //hết check email
    //check pass
    $('#ip-pass').blur(function() {
        var lengthpass = $('#ip-pass').val();
        if (lengthpass.length == 0) {
            $('#in-err-pass').html("Please enter the field !");
            $('#ip-pass').css({ 'border-color': 'red' });
            $('#icon-pass').css({ 'display': 'none' });
        } else if (lengthpass.length > 0 && lengthpass.length < 6) {
            $('#in-err-pass').html("Password must have at least 6 charecter !");
            $('#ip-pass').css({ 'border-color': 'red' });
            $('#icon-pass').css({ 'display': 'none' });
        } else {
            $('#in-err-pass').html("");
            $('#ip-pass').css({ 'border-color': 'white' });
            $('#icon-pass').css({ 'display': 'block' });
        }
    });
    $('#ip-pass').keyup(function() {
        var lengthpass = $('#ip-pass').val();
        if (lengthpass.length >= 0 && lengthpass.length < 6) {
            $('#in-err-pass').html("Password must have at least 6 charecter !");
            $('#ip-pass').css({ 'border-color': 'red' });
            $('#icon-pass').css({ 'display': 'none' });
        }
        if (lengthpass.length >= 6) {
            $('#in-err-pass').html("");
            $('#ip-pass').css({ 'border-color': 'white' });
            $('#icon-pass').css({ 'display': 'block' });
        }
    });
    //hết check pass
    //check click login
    $('#btn-login').click(function() {
        var lengthpass = $('#ip-pass').val();
        var regular = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email1 = $('#ip-email').val();
        if (lengthpass.length == 0) {
            $('#in-err-pass').html(" Please enter the field !");
        }
        if (email1.length == 0) {
            $('#in-err-email').html(" Please enter the field !");
        }
        if (lengthpass.length >= 6 && regular.test(email1)) {
            alert("Login Success")
        }
    })
    //hết check click login
    //Click btn back to top
    $('#myBtn').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
    //Hết btn back to top

        $('nav#menu1').mmenu({
            extensions: ['fx-menu-slide', 'shadow-page', 'shadow-panels', 'listview-large', 'pagedim-white'],
            iconPanels: true,
            counters: true,
            keyboardNavigation: {
                enable: true,
                enhance: true
            },
            searchfield: {
                placeholder: 'Search'
            },
            navbar: {
                title: 'Menu'
            },
            navbars: [{
                position: 'top',
                content: ['searchfield']
            }, {
                position: 'top',
                content: ['breadcrumbs', 'close']
            }, {
                position: 'bottom',
                content: ['<a href="http://minhduckma.blogspot.com" target="_blank">Book your train</a>']
            }]
        }, {
            searchfield: {
                clear: true
            }
        });

});