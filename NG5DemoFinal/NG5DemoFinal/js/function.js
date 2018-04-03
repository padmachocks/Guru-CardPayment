$(document).ready(function () {

    //select all the a tag with name equal to modal
    $('a[name=modalpop]').click(function (e) {
        console.log("modalpopup called..")
        $("body,html,document").scrollTop(0);

        //Cancel the link behavior
        e.preventDefault();

        //Get the A tag
        var id = $(this).attr('href');

        if (id != "") {

            //Get the screen height and width
            var maskHeight = $(document).height();
            var maskWidth = $(window).width();

            //Set heigth and width to mask to fill up the whole screen
            //$('#mask').css({'width':maskWidth,'height':maskHeight});
            $('#mask').css({ 'width': '100%', 'height': '100%' });
            //transition effect		
            $('#mask').fadeIn(1000);
            $('#mask').fadeTo("slow", 0.8);
            //fix textarea
            $("textarea").css('z-index', '-1');

            //Get the window height and width
            //var winH = $(window).height();
            //var winW = $(window).width();

            //Set the popup window to center
            //$(id).css('top', '2em');
            //$(id).css('left', winW/2-$(id).width()/2);

            //transition effect
            $(id).fadeIn(2000);
        }
    });

    //if close button is clicked
    $('.window .close').click(function (e) {
        $("textarea").css('z-index', '10');
        //Cancel the link behavior
        e.preventDefault();

        $('#mask').hide();
        $('.window').hide();
        console.log("close");
    });

    //if mask is clicked
    $('#mask').click(function () {
        $("textarea").css('z-index', '10');
        $(this).hide();
        $('.window').hide();
    });

    $(window).resize(function () {

        var box = $('#boxes .window');

        //Get the screen height and width
        var maskHeight = $(window).height();
        var maskWidth = $(window).width();

        //Set height and width to mask to fill up the whole screen
        //  $('#mask').css({'width':maskWidth,'height':maskHeight});

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        //  box.css('top',  winH/2 - box.height()/2);
        //  box.css('left', winW/2 - box.width()/2);

    });

    var CCompanies = $("#lnkCardPayment").children().length;
    if (CCompanies == 4) {
    try
    { $("#lnkCardPayment").children().css('max-width', '60px'); }
    catch(e)
    { //console.log(e); 
    } 
    }
    
    if (CCompanies == 3) {
      try { $("#lnkCardPayment").children().css('max-width', '80px'); } catch (e)
    { //console.log(e); 
    }
    }
    
    if (CCompanies == 2 || CCompanies == 1) {
        try { $("#lnkCardPayment").children().css('max-width', '100px'); } catch (e) { //console.log(e); 
    }
    }

});