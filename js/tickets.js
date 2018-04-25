 $(function() {
     $('#step1-tickets').show();
     $('#step2-passengers').hide();
     $('#step3-payment').hide();
     $('#step4-vali').hide();
     //Xử lý steps
     //Step 1
     $('.buy-now').click(function() {
         //Time there
         var trainthere = $(this).parents(".price-results").prevAll(".results-logo").find("h3").text();
         var namethere = $(this).parents(".price-results").prevAll(".results-logo").find("p").text();
         var traintime = $(this).parents(".price-results").prevAll(".results-content").find(".there .timethere .time-train").text();
         var datetrain = $(this).parents(".price-results").prevAll(".results-content").find(".there .timethere .date-train").text();
         var locationresult = $(this).parents(".price-results").prevAll(".results-content").find(".there .timethere .location-result").text();
         var stationtrain = $(this).parents(".price-results").prevAll(".results-content").find(".there .timethere .station-train").text();
         var timerun = $(this).parents(".price-results").prevAll(".results-content").find(".there .arrow-result .date-train").text();

         var traintimeright = $(this).parents(".price-results").prevAll(".results-content").find(".there .text-right .time-train").text();
         var datetrainright = $(this).parents(".price-results").prevAll(".results-content").find(".there .text-right .date-train").text();
         var locationresultright = $(this).parents(".price-results").prevAll(".results-content").find(".there .text-right .location-result").text();
         var stationtrainright = $(this).parents(".price-results").prevAll(".results-content").find(".there .text-right .station-train").text();
         //time back
         var traintimeback = $(this).parents(".price-results").prevAll(".results-content").find(".back .timeback .time-train").text();
         var datetrainback = $(this).parents(".price-results").prevAll(".results-content").find(".back .timeback .date-train").text();
         var locationresulback = $(this).parents(".price-results").prevAll(".results-content").find(".back .timeback .location-result").text();
         var stationtrainback = $(this).parents(".price-results").prevAll(".results-content").find(".back .timeback .station-train").text();
         var timerunback = $(this).parents(".price-results").prevAll(".results-content").find(".back .arrow-result .date-train").text();

         var traintimebackright = $(this).parents(".price-results").prevAll(".results-content").find(".back .text-right .time-train").text();
         var datetrainbackright = $(this).parents(".price-results").prevAll(".results-content").find(".back .text-right .date-train").text();
         var locationresulbackright = $(this).parents(".price-results").prevAll(".results-content").find(".back .text-right .location-result").text();
         var stationtrainbackright = $(this).parents(".price-results").prevAll(".results-content").find(".back .text-right .station-train").text();

         $('#step1-tickets').hide();
         $('#step2-passengers').show("slide", { direction: "right" }, 700);
         $('#step3-payment').hide();
         $('#step4-vali').hide();
         $('.sidebar-summary-add').append("<h3>Summary</h3><hr><div class='col-md-12 col-sm-12 col-xs-12'><div class='col-md-6 col-sm-6 col-xs-6 ticket-sidebar'><i class='fa fa-arrow-circle-right' aria-hidden='true'></i><p>There</p></div><div class='col-md-6 col-sm-6 col-xs-6 icon-min'><i class='fa fa-minus-square min-there' aria-hidden='true'></i></div></div><div id='there-sidebar-1' class='col-md-12 col-sm-12 col-xs-12 there-sidebar-1'><div class='col-md-6 col-sm-6 col-xs-6' id='there-content'><p>Train</p><p>Name</p></div><div class='col-md-6 col-sm-6 col-xs-6' id='there-train'><p>" + trainthere + "</p><p>" + namethere + "</p></div><div class='col-md-12 col-sm-12 col-xs-12' id='time-sidebar'><div class='col-md-5 col-sm-5 col-xs-5'><p class='clock'>" + traintime + "</p><p class='date'>" + datetrain + "</p></div><div class='col-md-2 col-sm-2 col-xs-2 text-center arrow-sidebar'><p>" + timerun + "</p><i class='fa fa-long-arrow-right' aria-hidden='true'></i></div><div class='col-md-5 col-sm-5 col-xs-5 text-right'><p class='clock'>" + traintimeright + "</p><p class='date'>" + datetrainright + "</p></div></div><div class='col-md-12 col-sm-12 col-xs-12' id='station-sidebar'><div class='col-md-6 col-sm-6 col-xs-6' id='stations-left'><p>" + locationresult + "</p><p class='station-name'>" + stationtrain + "</p></div><div class='col-md-6 col-sm-6 col-xs-6 text-right' id='stations-right'><p>" + locationresultright + "</p><p class='station-name'>" + stationtrainright + "</p></div></div></div><hr width='100%' class='hrback'><div class='col-md-12 col-sm-12 col-xs-12 backone'><div class='col-md-6 col-sm-7 col-xs-6 ticket-sidebar'><i class='fa fa-arrow-circle-left' aria-hidden='true'></i><p>Back</p></div><div class='col-md-6 col-sm-5 col-xs-6 icon-min'><i id='min-back' class='fa fa-minus-square min-back' aria-hidden='true'></i></div></div><div id='back-sidebar-1' class='col-md-12 col-sm-12 col-xs-12 back-sidebar-1'><div class='col-md-6 col-sm-6 col-xs-6' id='back-content'><p>Train</p><p>Name</p></div><div class='col-md-6 col-sm-6 col-xs-6' id='back-train'><p>" + trainthere + "</p><p>" + namethere + "</p></div><div class='col-md-12 col-sm-12 col-xs-12' id='time-sidebar'><div class='col-md-5 col-sm-5 col-xs-5'><p class='clock'>" + traintimeback + "</p><p class='date'>" + datetrainback + "</p></div><div class='col-md-2 col-sm-2 col-xs-2 text-center arrow-sidebar'><p>" + timerunback + "</p><i class='fa fa-long-arrow-left' aria-hidden='true'></i></div><div class='col-md-5 col-sm-5 col-xs-5 text-right'><p class='clock'>" + traintimebackright + "</p><p class='date'>" + datetrainbackright + "</p></div></div><div class='col-md-12 col-sm-12 col-xs-12' id='station-sidebar'><div class='col-md-6 col-sm-6 col-xs-6' id='stations-left'><p>" + locationresulback + "</p><p class='station-name'>" + stationtrainback + "</p></div><div class='col-md-6 col-sm-6 col-xs-6 text-right' id='stations-right'><p>" + locationresulbackright + "</p><p class='station-name'>" + stationtrainbackright + "</p></div></div></div><hr width='100%'><div class='col-md-12 col-xs-12 col-sm-12'><div class='col-md-6 col-xs-6 col-sm-7 ticket-sidebar'><i class='fa fa-user' aria-hidden='true'></i><p>Passengers</p></div><div class='col-md-6 col-sm-5 col-xs-6 icon-min'><i id='min-pass' class='fa fa-minus-square min-pass' aria-hidden='true'></i></div></div><div class='col-md-12 col-sm-12 col-xs-12 passengers-sidebar' id='passengers-sidebar'><div class='col-md-6 col-sm-6 col-xs-6' id='passengers-left'><p>1 Adult</p><p>0 Children</p></div><div class='col-md-6 col-sm-6 col-xs-6 text-right' id='passengers-right'><p><i class='fa fa-usd' aria-hidden='true'></i>260</p><p><i class='fa fa-usd' aria-hidden='true'></i>0</p></div></div><hr width='100%'><div class='col-md-12 col-sm-12 col-xs-12'><div class='col-md-6 col-sm-7 col-xs-6 ticket-sidebar'><i class='fa fa-suitcase' aria-hidden='true'></i><p>Baggage</p></div><div class='col-md-6 col-sm-5 col-xs-6 icon-min'><i id='min-bag' class='fa fa-minus-square min-bag' aria-hidden='true'></i></div></div><div class='col-md-12 col-sm-12 col-xs-12 baggage-sidebar' id='baggage-sidebar'><div class='col-md-6 col-sm-6 col-xs-6' id='baggage-left'><p>1 Excess</p><p>0 Animal/Bird</p><p>0 Equipment</p></div><div class='col-md-6 col-sm-6 col-xs-6 text-right' id='baggage-right'><p><i class='fa fa-usd' aria-hidden='true'></i>44</p><p><i class='fa fa-usd' aria-hidden='true'></i>0</p><p><i class='fa fa-usd' aria-hidden='true'></i>0</p></div></div><hr width='100%'><div class='col-md-12 col-sm-12 col-xs-12' id='total'><div class='col-md-6 col-sm-6 col-xs-6' id='total-left'><p>Total</p></div><div class='col-md-6 col-sm-6 col-xs-6 text-right' id='total-right'><p><i class='fa fa-usd' aria-hidden='true'></i>304.00</p></div></div>")
         if (timerunback.length == 0) {
             $(".backone").css({ "display": "none" });
             $(".back-sidebar-1").css({ "display": "none" });
             $(".hrback").css({ "display": "none" });
         }
         $(".breadcrumb li#pass-click a").css({ "background-color": "#f03c07" });
         $(".breadcrumb li#pass-click a").append("<style>.breadcrumb li#pass-click a:after {border-left: 30px solid #f03c07;}</style>");
         $("#ticket-click").click(function() {
             $('#step1-tickets').show("slide", { direction: "left" }, 700);
             $('#step2-passengers').hide();
             $('#step3-payment').hide();
             $('#step4-vali').hide();
             location.reload();
             $('.passenger-content input').val("");
             $('.err-info').css({ "display": "none" });
             $(".breadcrumb li#pass-click a").css({ "background-color": "#28292e" });
             $(".breadcrumb li#pass-click a").append("<style>.breadcrumb li#pass-click a:after {border-left: 30px solid #28292e;}</style>");
             $(".breadcrumb li#payment-click a").css({ "background-color": "#28292e" });
             $(".breadcrumb li#payment-click a").append("<style>.breadcrumb li#payment-click a:after {border-left: 30px solid #28292e;}</style>");
             $(".breadcrumb li#vali-click a").css({ "background-color": "#28292e" });
             $(".breadcrumb li#vali-click a").append("<style>.breadcrumb li#vali-click a:after {border-left: 30px solid #28292e;}</style>");
         });
         //Xử lý sidebar
         var flag = true;
         $('.min-there').click(function() {
             if (flag) {
                 $('.min-there').removeClass("fa-minus-square");
                 $('.min-there').addClass("fa-plus-square");
                 $('.there-sidebar-1').slideToggle('slow');
                 flag = !flag;
             } else {
                 $('.min-there').removeClass("fa-plus-square");
                 $('.min-there').addClass("fa-minus-square");
                 $('.there-sidebar-1').slideToggle('slow');
                 flag = !flag;
             }
         });

         var flag1 = true;
         $('.min-back').click(function() {
             if (flag1) {
                 $('.min-back').removeClass("fa-minus-square");
                 $('.min-back').addClass("fa-plus-square");
                 $('.back-sidebar-1').slideToggle('slow');
                 flag1 = !flag1;
             } else {
                 $('.min-back').removeClass("fa-plus-square");
                 $('.min-back').addClass("fa-minus-square");
                 $('.back-sidebar-1').slideToggle('slow');
                 flag1 = !flag1;
             }
         });

         var flag2 = true;
         $('.min-pass').click(function() {
             if (flag2) {
                 $('.min-pass').removeClass("fa-minus-square");
                 $('.min-pass').addClass("fa-plus-square");
                 $('.passengers-sidebar').slideToggle('slow');
                 flag2 = !flag2;
             } else {
                 $('.min-pass').removeClass("fa-plus-square");
                 $('.min-pass').addClass("fa-minus-square");
                 $('.passengers-sidebar').slideToggle('slow');
                 flag2 = !flag2;
             }
         });
         var flag3 = true;
         $('.min-bag').click(function() {
             if (flag3) {
                 $('.min-bag').removeClass("fa-minus-square");
                 $('.min-bag').addClass("fa-plus-square");
                 $('.baggage-sidebar').slideToggle('slow');
                 flag3 = !flag3;
             } else {
                 $('.min-bag').removeClass("fa-plus-square");
                 $('.min-bag').addClass("fa-minus-square");
                 $('.baggage-sidebar').slideToggle('slow');
                 flag3 = !flag3;
             }
         });
     });
     //Step 2
     $('.btn-buy-pass').click(function() {


         if (i > 2) {
             if ($(this).prevAll('.passenger').children('.passenger-content').find('input').hasClass('has-success') && $(this).prevAll('.append').children('.passenger').find('.col-md-4 input').hasClass('has-success')) {
                 $('#step1-tickets').hide();
                 $('#step2-passengers').hide();
                 $('#step3-payment').show("slide", { direction: "right" }, 700);
                 $('#step4-vali').hide();
                 $(".breadcrumb li#payment-click a").css({ "background-color": "#f03c07" });
                 $(".breadcrumb li#payment-click a").append("<style>.breadcrumb li#payment-click a:after {border-left: 30px solid #f03c07;}</style>");
             }
         } else if (i == 2) {
             if ($(this).prevAll('.passenger').children('.passenger-content').find('input').hasClass('has-success')) {
                 $('#step1-tickets').hide();
                 $('#step2-passengers').hide();
                 $('#step3-payment').show("slide", { direction: "right" }, 700);
                 $('#step4-vali').hide();
                 $(".breadcrumb li#payment-click a").css({ "background-color": "#f03c07" });
                 $(".breadcrumb li#payment-click a").append("<style>.breadcrumb li#payment-click a:after {border-left: 30px solid #f03c07;}</style>");

             }
         }
         $('#pass-click').click(function() {
             $('#step1-tickets').hide();
             $('#step2-passengers').show("slide", { direction: "left" }, 700);
             $('#step3-payment').hide();
             $('#step4-vali').hide();
             $(".breadcrumb li#payment-click a").css({ "background-color": "#28292e" });
             $(".breadcrumb li#payment-click a").append("<style>.breadcrumb li#payment-click a:after {border-left: 30px solid #28292e;}</style>");
             $(".breadcrumb li#vali-click a").css({ "background-color": "#28292e" });
             $(".breadcrumb li#vali-click a").append("<style>.breadcrumb li#vali-click a:after {border-left: 30px solid #28292e;}</style>");
         });

     });
     $('#btn-change').click(function() {
         $('#step1-tickets').show("slide", { direction: "left" }, 700);
         $('#step2-passengers').hide();
         $('#step3-payment').hide();
         $('#step4-vali').hide();
     });
     $('#btn-change1').click(function() {
         $('#step1-tickets').hide();
         $('#step2-passengers').show("slide", { direction: "left" }, 700);
         $('#step3-payment').hide();
         $('#step4-vali').hide();
     });

     //Xử lý menu
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
     $('#datetimepicker3').datetimepicker({
         format: 'DD/MM/YYYY'
     });
     $('#btn-refesh').on('click', function() {
         var from = $('#ip-travel-reponsive-1').val();
         var to = $('#to').val();
         $('#ip-travel-reponsive-1').val(to);
         $('#to').val(from);
     });
     $('#myBtn').click(function() {
         $('body,html').animate({
             scrollTop: 0
         }, 800);
     });

     //Xử lý khi click nút next Passenger

     $(document).on('click', '.btn-new-passenger', function() {
         var firstname = $(this).parents(".err").prevAll().children('.input-fname').val();
         var lastname = $(this).parents(".err").prevAll().children('.input-lname').val();
         var number = $(this).parents(".err").prevAll().children('.input-document-number').val();
         if (firstname.length != 0 && lastname.length != 0 && number.length != 0) {
             $(this).prev(".err-info").children(".note-err").removeClass("fa-times-circle-o");
             $(this).prev(".err-info").children(".note-err").addClass("fa-check-circle-o");
             $(this).prev(".err-info").find(".err-p").html("Done");
             $(this).prev(".err-info").find(".err-p").css({ "color": "green" });
             $(this).parents(".err").prevAll().children().addClass('has-success');
             $(this).parents(".err").prevAll().children().removeClass('has-error');
         }
         if (firstname.length == 0) {

             // $(this).parents(".err").prevAll().children('.input-fname').css({ "border-color": "red" });
             // $(this).prev(".err-info").children(".note-err").removeClass("fa-check-circle-o");
             // $(this).prev(".err-info").children(".note-err").addClass("fa-times-circle-o");
             // $(this).prev(".err-info").find(".fa-times-circle-o").css({ "display": "block" });
             // $(this).prev(".err-info").find(".err-p").css({ 'color': 'red' });
             // $(this).prev(".err-info").find(".err-p").html("Some field are filled in incorrectly");
             // $(this).parents(".err").prevAll().children('.input-fname').addClass('has-error');
             $(this).parents(".err").prevAll().children('.input-fname').css({ "border-color": "red" });
             $(this).prev(".err-info").children(".fa-times-circle-o").css({ "display": "block" });
             $(this).prev(".err-info").find(".err-p").html("Some field are filled in incorrectly");
             $(this).prev(".err-info").find(".err-p").css({ 'color': 'red' });
             $(this).parents(".err").prevAll().children('.input-fname').addClass('has-error');
             $(this).prev(".err-info").children(".note-err").removeClass("fa-check-circle-o");
             $(this).prev(".err-info").children(".note-err").addClass("fa-times-circle-o");
             $(this).prev(".err-info").find(".fa-times-circle-o").css({ "display": "block" });
         } else {
             $(this).parents(".err").prevAll().children('.input-fname').css({ "border-color": "" });
         }

         if (lastname.length == 0) {
             $(this).parents(".err").prevAll().children('.input-lname').css({ "border-color": "red" });
             $(this).prev(".err-info").children(".fa-times-circle-o").css({ "display": "block" });
             $(this).prev(".err-info").find(".err-p").html("Some field are filled in incorrectly");
             $(this).prev(".err-info").find(".err-p").css({ 'color': 'red' });
             $(this).parents(".err").prevAll().children('.input-lname').addClass('has-error');
             $(this).prev(".err-info").children(".note-err").removeClass("fa-check-circle-o");
             $(this).prev(".err-info").children(".note-err").addClass("fa-times-circle-o");
             $(this).prev(".err-info").find(".fa-times-circle-o").css({ "display": "block" });
         } else {
             $(this).parents(".err").prevAll().children('.input-lname').css({ "border-color": "" });
         }
         if (number.length == 0) {
             $(this).parents(".err").prevAll().children('.input-document-number').css({ "border-color": "red" });
             $(this).prev(".err-info").children(".fa-times-circle-o").css({ "display": "block" });
             $(this).prev(".err-info").find(".err-p").css({ 'color': 'red' });
             $(this).prev(".err-info").find(".err-p").html("Some field are filled in incorrectly");
             $(this).parents(".err").prevAll().children('.input-document-number').addClass('has-error');
             $(this).prev(".err-info").children(".note-err").removeClass("fa-check-circle-o");
             $(this).prev(".err-info").children(".note-err").addClass("fa-times-circle-o");
             $(this).prev(".err-info").find(".fa-times-circle-o").css({ "display": "block" });
         } else {
             $(this).parents(".err").prevAll().children('.input-document-number').css({ "border-color": "" });

         }
     });
     //Thêm form khi ấn nút add
     var i = 2;
     $('#add-passenger').click(function() {
         $(".append").append("<div class='panel panel-default passenger'> <div class='panel-heading col-md-12 col-sm-12 col-xs-12'> <div class='col-md-6 col-sm-6 col-xs-6 title-passenger'> <i data-id='1' class='fa fa-minus-circle icon-min-passenger' aria-hidden='true'></i> <p>Passenger " + i + "</p></div><div class='col-md-6 col-sm-6 col-xs-6 text-right remove'> <p>Remove <i class='fa fa-times removed' aria-hidden='true'></i></p></div></div><div class='panel panel-body col-md-12 col-sm-12 col-xs-12 passenger-content'> <div class='col-md-4 col-sm-12 col-xs-12'> <p>First Name</p><input type='text' name='fname' id='input-fname' class='form-control input-fname' value='' required='required' pattern='' title=''> </div><div class='col-md-4 col-sm-12 col-xs-12'> <p>Last Name</p><input type='text' name='lname' id='input-lname' class='form-control input-lname' value='' required='required'> </div><div class='col-md-4 col-sm-12 col-xs-12'> <p>Age</p><select name='' id='input-select-age' class='form-control'> <option value=''>Adult</option> <option value=''>Kids</option> </select> </div><div class='col-md-4 col-sm-12 col-xs-12'> <div class='checkbox'> <label> <input type='checkbox' value=''> Recuced Mobility </label> </div></div><hr width='100%'> <div class='col-md-4 col-sm-12 col-xs-12'> <p>Document Type</p><select name='' id='input-select-dt' class='form-control'> <option value=''>Passport</option> <option value=''>Card</option> <option value=''>People ID</option> </select> </div><div class='col-md-4 col-sm-12 col-xs-12'> <p>Document Number</p><input type='text' name='number' id='input-document-number' class='form-control input-document-number' value='' required='required'> </div><div class='col-md-4 col-sm-12 col-xs-12'> <p>Citizenship</p><select name='' id='input-select-citi' class='form-control'> <option value=''>United Kingdom</option> <option value=''>Viet Nam</option> </select> </div><hr width='100%'> <div class='col-md-4 col-sm-12 col-xs-12'> <p>Additional Baggage</p><select name='' id='input-select-additonal' class='form-control'> <option value=''>1 Excess</option> <option value=''>2 Excess</option> <option value=''>3 Excess</option> </select> </div><div class='col-md-4 col-sm-12 col-xs-12'> <p>Animals</p><select name='' id='input-select-animals' class='form-control'> <option value=''>0 Animals</option> <option value=''>1 Animals</option> <option value=''>2 Animals</option> </select> </div><div class='col-md-4 col-sm-12 col-xs-12'> <p>Equipment</p><select name='' id='input-select-equipment' class='form-control'> <option value=''>0 Equipment</option> <option value=''>1 Equipment</option> <option value=''>2 Equipment</option> </select> </div><hr width='100%'> <div class='col-md-12 col-sm-12 col-xs-12 err'> <div class='col-md-8 col-sm-12 col-xs-12 err-info'> <i class='fa fa-times-circle-o note-err' aria-hidden='true'></i> <p class='err-p'></p></div><div class='col-md-4 col-sm-12 col-xs-12 btn-new-passenger'> <button class='btn btn-next-pass'>Next Passenger</button> </div></div></div></div>");
         i++
     });
     //Xóa form khi ấn nút remove
     $(document).on('click', '.removed', function() {
         $(this).parents('.passenger').remove();
         i--;
     });
     //Show-hide nội dung của panel passenger
     $(document).on('click', '.icon-min-passenger', function() {
         // if (flag5) {
         if ($(this).hasClass("fa-minus-circle")) {
             $(this).removeClass("fa-minus-circle");
             $(this).addClass("fa-plus-circle");
             $(this).parents('.panel-heading').next('.passenger-content').slideToggle('slow');
         } else {
             $(this).removeClass("fa-plus-circle");
             $(this).addClass("fa-minus-circle");
             $(this).parents('.panel-heading').next('.passenger-content').slideToggle('slow');
         }
     });
     //Xử lý form ở payment
     $('#btn-ticket-pm').click(function() {
         var fname = $('#input-fname-pm').val();
         var lname = $('#input-lname-pm').val();
         var birth = $('#ip-date3').val();
         var email = $('#input-email-pm').val();
         var regular = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         var docnumber = $('#input-document-pm').val();
         var card = $('#cc').val();
         var cardholder = $('#input-card-holder').val();
         if (fname.length == 0) {
             $(".payment-name").addClass('has-error');
             $(".payment-name").removeClass('has-success');
         } else {
             $(".payment-name").removeClass('has-error');
             $(".payment-name").addClass('has-success');
         }
         if (lname.length == 0) {
             $(".payment-lname").addClass('has-error');
             $(".payment-lname").removeClass('has-success');
         } else {
             $(".payment-lname").removeClass('has-error');
             $(".payment-lname").addClass('has-success');
         }
         if (birth.length == 0) {
             $(".payment-birth").addClass('has-error');
             $(".payment-birth").removeClass('has-success');
         } else {
             $(".payment-birth").removeClass('has-error');
             $(".payment-birth").addClass('has-success');
         }
         if (!regular.test(email)) {
             $(".payment-email").addClass('has-error');
             $(".payment-email").removeClass('has-success');
         } else {
             $(".payment-email").removeClass('has-error');
             $(".payment-email").addClass('has-success');
         }
         if (docnumber.length == 0) {
             $(".payment-document").addClass('has-error');
             $(".payment-document").removeClass('has-success');
         } else {
             $(".payment-document").removeClass('has-error');
             $(".payment-document").addClass('has-success');
         }
         if (card.length != 19) {
             $(".card-number").addClass('has-error');
             $(".card-number").removeClass('has-success');
             $(".card-number").css({ "border-color": "#a94442" });
         } else {
             $(".card-number").removeClass('has-error');
             $(".card-number").addClass('has-success');
             $(".card-number").css({ "border-color": "#3c763d" });
         }
         if (cardholder.length == 0) {
             $(".card-holder").addClass('has-error');
             $(".card-holder").removeClass('has-success');
         } else {
             $(".card-holder").removeClass('has-error');
             $(".card-holder").addClass('has-success');
         }
         if ($('#check-pm').prop("checked") == true) {
             $(".checkbox-agree").addClass('has-success');
             $(".checkbox-agree").removeClass('has-error');
         } else {
             $(".checkbox-agree").addClass('has-error');
             $(".checkbox-agree").removeClass('has-success');
         }
         if ($(".checkbox-agree").hasClass('has-success') && $(".card-holder").hasClass('has-success') && $(".card-number").hasClass('has-success') && $(".payment-document").hasClass('has-success') && $(".payment-email").hasClass('has-success') && $(".payment-birth").hasClass('has-success') && $(".payment-lname").hasClass('has-success') && $(".payment-name").addClass('has-success')) {
             $('#step1-tickets').hide();
             $('#step2-passengers').hide();
             $('#step3-payment').hide();
             $('#step4-vali').show("slide", { direction: "right" }, 700);
             $(".breadcrumb li#vali-click a").css({ "background-color": "#f03c07" });
             $(".breadcrumb li#vali-click a").append("<style>.breadcrumb li#vali-click a:after {border-left: 30px solid #f03c07;}</style>");

         }

     });
     //Xử lý ở step Validation
     $('#btn-vali').click(function() {
         window.location.href='thank-you.html'
     });
     //Xử lý khi click lại payment
     $("#payment-click").click(function() {
         $('#step1-tickets').hide();
         $('#step2-passengers').hide();
         $('#step3-payment').show("slide", { direction: "left" }, 700);
         $('#step4-vali').hide();
         $(".breadcrumb li#vali-click a").css({ "background-color": "#28292e" });
         $(".breadcrumb li#vali-click a").append("<style>.breadcrumb li#vali-click a:after {border-left: 30px solid #28292e;}</style>");
         $(".breadcrumb li#payment-click a").css({ "background-color": "#f03c07" });
         $(".breadcrumb li#payment-click a").append("<style>.breadcrumb li#payment-click a:after {border-left: 30px solid #f03c07;}</style>");
     });

     //js sub menu
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
     $('#btn-search-tickets').click(function() {
         var from = $('#ip-travel-reponsive-1').val();
         var to = $('#to').val();
         var date = $('#ip-date').val();
         var way = $('#way').val();
         if (from.length == 0) {
             $('#ip-travel-reponsive-1').css({ 'border-color': 'red' });
         } else {
             $('#ip-travel-reponsive-1').css({ 'border-color': '' });
         }
         if (to.length == 0) {
             $('#to').css({ 'border-color': 'red' });
         } else {
             $('#to').css({ 'border-color': '' });
         }
         if (date.length == 0) {
             $('#ip-date').css({ 'border-color': 'red' });
             $('#span-date-1').css({ 'border-color': 'red' });
         } else {
             $('#ip-date').css({ 'border-color': '' });
             $('#span-date-1').css({ 'border-color': '' });
         }
         if (way.length == 0) {
             $('#way').css({ 'border-color': 'red' });
             $('#span-date-2').css({ 'border-color': 'red' });
         } else {
             $('#way').css({ 'border-color': '' });
             $('#span-date-2').css({ 'border-color': '' });
         }
     });
     $('.logo').click(function(){
        location.href="home.html";
     })
 });