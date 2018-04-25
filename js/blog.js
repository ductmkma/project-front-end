    $(function() {
        $('.logo').click(function(){
        location.href="home.html";
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
        $('#myBtn').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        });
        $('[data-toggle="tooltip"]').tooltip();
        $('#btn-leave-cmt').click(function(){
            var name = $('#ip-yname').val();
            var email = $('#ip-yemail').val();
            var mess = $('#ip-ymess').val();
            var regular = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(name.length==0){
                $('#ip-yname').css({'border-color':'red'});
            }else{
                $('#ip-yname').css({'border-color':''});
            }
            if(mess.length==0){
                  $('#ip-ymess').css({'border-color':'red'});
            }else{
                 $('#ip-ymess').css({'border-color':''});
            }
            if(!regular.test(email)){
                $('#ip-yemail').css({'border-color':'red'});
            }else
            {
                 $('#ip-yemail').css({'border-color':''});
                 alert()
            }
            if((name.length!=0 && regular.test(email) && mess.length!=0)){
                alert("Success");
            }
        });
        $('.reply a').click(function(){
            $('.append-subcomment').append("<div class='comment-avatar'><img src='images/home-images/sideshow-4.jpg' alt=''></div><!-- Contenedor del Comentario --><div class='comment-box col-md-8'><div class='comment-head'><h6 class='comment-name'><a href='#'>Marla Singer</a></h6><div class='reply'><span>3 days ago</span><a style='cursor: pointer;'>Reply</a></div></div><div class='comment-content'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?</div></div>");
        });

    });