 $(function() {
        new WOW().init();
        $('.logo').click(function(){
        location.href="home.html";
     });
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
        $('#btn-search-tickets').click(function(){
            var from = $('#from').val();
            var to = $('#to').val();
            var date = $('#ip-date').val();
            var way = $('#way').val();
            if(from == to){
                alert("Điểm đi và điểm đến không được trùng nhau !")
            }
            if(from.length==0||from==to)
            {
                $('#from').css({'border-color':'red'});
                $('#from').removeClass('has-success');
            }else
            {
                $('#from').css({'border-color':''});
                $('#from').addClass('has-success');
            }
             if(to.length==0 || to==from)
            {
                $('#to').css({'border-color':'red'});
                 $('#to').removeClass('has-success');
            }else
            {
                 $('#to').css({'border-color':''});
                  $('#to').addClass('has-success');
            }
             if(date.length==0)
            {
                $('#ip-date').css({'border-color':'red'});
                $('#span-date-1').css({'border-color':'red'});
                 $('#ip-date').removeClass('has-success');
            }else
            {
                $('#ip-date').css({'border-color':''});
                $('#span-date-1').css({'border-color':''});
                $('#ip-date').addClass('has-success');
            }
             if(way.length==0)
            {
                $('#way').css({'border-color':'red'});
                $('#span-date-2').css({'border-color':'red'});
                $('#way').removeClass('has-success');
            }else
            {
                $('#way').css({'border-color':''});
                $('#span-date-2').css({'border-color':''});
                $('#way').addClass('has-success');
            }
            if($('#way').hasClass('has-success') && $('#ip-date').hasClass('has-success')&& $('#to').hasClass('has-success') &&$ ('#from').hasClass('has-success') ){
                window.location.href = "tickets.html";
            }
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