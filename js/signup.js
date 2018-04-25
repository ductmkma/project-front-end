 $(function() {

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
        //check email
        $('#ip-email').keyup(function() {
            var regular = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var email = $('#ip-email').val();
            if (!regular.test(email)) {
                $('#in-err-email').html('Please enter a valid email format !');
                $('#ip-email').css({ 'border-color': 'red' });
                $('#in-err-email').css({ 'color': 'red' });

            } else {
                $('#in-err-email').html('Correct !');
                $('#in-err-email').css({ 'color': '#00ff00' });
                $('#ip-email').css({ 'border-color': 'white' });

            }
        });
        $('#ip-email').blur(function() {
            var email = $('#ip-email').val();
            if (email.length == 0) {
                $('#in-err-email').html('Please enter the field !');
            }
        });
        // Hết check email

        //check name
        $('#ip-name').keyup(function() {

            var lengthname = $('#ip-name').val();
            if (lengthname.length < 10) {
                $('#in-err-name').html("Name must have at least 10 charecter !");
                $('#in-err-name').css({ 'color': 'red' });
                $('#ip-name').css({ 'border-color': 'red' });
            } else {
                $('#in-err-name').html("Correct !");
                $('#in-err-name').css({ 'color': '#00ff00' });
                $('#ip-name').css({ 'border-color': 'white' });

            }
        });
        $('#ip-name').blur(function() {

            var lengthname = $('#ip-name').val();
            if (lengthname.length == 0) {
                $('#in-err-name').html("Please enter the field !")
            }
        });
        //hết check name
        //Check pass
        $('#ip-pass').blur(function() {
            var lengthpass = $('#ip-pass').val();
            if (lengthpass.length == 0) {
                $('#in-err-pass').html("Please enter the field !");
                $('#ip-pass').css({ 'border-color': 'red' });
                $('#icon-pass').css({ 'display': 'none' });
            } else if (lengthpass.length > 0 && lengthpass.length < 6) {
                $('#in-err-pass').html("Password must have at least 6 charecter !");
                $('#ip-pass').css({ 'border-color': 'red' });
                $('#icon-pass').css({ 'color': 'red' });
            } else {
                $('#in-err-pass').html("Correct !");
                $('#ip-pass').css({ 'border-color': 'white' });
                $('#icon-pass').css({ 'color': '#00ff00' });

            }
        });
        $('#ip-pass').keyup(function() {
            var lengthpass = $('#ip-pass').val();
            if (lengthpass.length >= 0 && lengthpass.length < 6) {
                $('#in-err-pass').html("Password must have at least 6 charecter !");
                $('#ip-pass').css({ 'border-color': 'red' });
                $('#in-err-pass').css({ 'color': 'red' });

            }
            if (lengthpass.length >= 6) {
                $('#in-err-pass').html("Correct !");
                $('#in-err-pass').css({ 'color': '#00ff00' });
                $('#ip-pass').css({ 'border-color': 'white' });
            }
        });
        //Hết check pass
        //Check cfpass
        $('#ip-cf-pass').blur(function() {
            var cfpass = $('#ip-cf-pass').val();
            if (cfpass.length == 0) {
                $('#in-err-cfpass').html('Please enter the field !');
            }
        });

        $('#ip-cf-pass').keyup(function() {
            var cfpass = $('#ip-cf-pass').val();
            var pass = $('#ip-pass').val();
            if (pass != cfpass) {
                $('#in-err-cfpass').html("No match");
                $('#in-err-cfpass').css({ 'color': 'red' });
                $('#ip-cf-pass').css({ 'border-color': 'red' });
            } else {
                $('#in-err-cfpass').html("Correct !");
                $('#in-err-cfpass').css({ 'color': '#00ff00' });
                $('#ip-cf-pass').css({ 'border-color': 'white' });
            }
        });
        $('#btn-signup').click(function() {
            var cfpass = $('#ip-cf-pass').val();
            var pass = $('#ip-pass').val();
            var regular = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var email = $('#ip-email').val();
            var lengthname = $('#ip-name').val();

            if (pass = cfpass && pass.length >= 6 && cfpass.length >= 6 && regular.test(email)&&lengthname.length>=10 ) {
                alert("Sign Up Success !")
            };
            if(pass.length==0){
                 $('#in-err-pass').html('Please enter the field !');
            }
             if(email.length==0){
                 $('#in-err-email').html('Please enter the field !');
            }
             if(cfpass.length==0){
                 $('#in-err-cfpass').html('Please enter the field !');
            }
             if(lengthname.length==0){
                 $('#in-err-name').html('Please enter the field !');
            }
        });

        //hết check cfpass
        $('#datetimepicker1').datetimepicker({
            format: 'MM/DD/YY'
        });

        $('#btn-refesh').on('click', function() {
            var from = $('#from').val();
            var to = $('#to').val();
            $('#from').val(to);
            $('#to').val(from);
        });
        $('#myBtn').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        });
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