 $(function() {
     $('.logo').click(function() {
         location.href = "home.html";
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

     // $(window).scroll(function() {
     //     if ($(this).scrollTop() > 100) {
     //         $('#myBtn').fadeIn();
     //     } else {
     //         $('#myBtn').fadeOut();
     //     }
     // });
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
     var $lightbox = $('#lightbox');

     $('[data-target="#lightbox"]').on('click', function(event) {
         var $img = $(this).find('img'),
             src = $img.attr('src'),
             alt = $img.attr('alt'),
             number = $img.attr('data-number'),
             css = {
                 'maxWidth': $(window).width() - 100,
                 'maxHeight': $(window).height() - 100
             };

         $lightbox.find('.close').addClass('hidden');
         $lightbox.find('img').attr('src', src);
         $lightbox.find('img').attr('alt', alt);
         $lightbox.find('img').css(css);
         $lightbox.find('#title-alt').html(alt);
         $lightbox.find('#number-img').html(number + "/6");

     });

     $lightbox.on('shown.bs.modal', function(e) {
         var $img = $lightbox.find('img');

         $lightbox.find('.modal-dialog').css({ 'width': $img.width() });
         $lightbox.find('.close').removeClass('hidden');
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