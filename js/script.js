$(document).ready(function(){
    // $(window ).scroll(function () {
    //     $('.menu-btn.overlay').css("top","80px");
    //     $('.header').css("height","80px");
    //     $('.header .menu-mainmenu').css({"height":"calc(100vh - 80px)","top":"80px"});
    //     $('.header_contain').css({"padding":"15px", "height":"80px"});
    //     $('.header_logo img').css({"width":"100px"});
    //     $('.banner').css("margin-top","80px");
    // });

    $('.menu-btn').click(function(){
        if($('body').hasClass('showMenu')){
            $('body').removeClass('showMenu');
        }else{
            $('body').addClass('showMenu');
            //$('.flexMenuToggle:first').click();
            return false;
        }
    });

    if ($(".middle_img").length > 0) {
        $('.middle_img').each(
            function(){
                var height = $(this).find('img').outerHeight(),
                    width = $(this).find('img').outerWidth();
                if(height > width){
                    $(this).find('img').css({'width': '100%'});
                }else{
                    $(this).find('img').css({'height': '100%'});

                }
            }
        )
    }

    $('.slide-banner').owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText: ["<i class='icon-angle-left'></i>","<i class='icon-angle-right'></i>"],
        navContainer: ".banner_nav"
    });

    $('.comment_content').owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText: ["<i class='icon-angle-left'></i>","<i class='icon-angle-right'></i>"],
        navContainer: '.comment_nav',
    });

    // Add minus icon for collapse element which is open by default
    $(".collapse").each(function () {
        $(this).siblings(".panel-heading").find("a").addClass("collapsed");
    });
    $(".collapse.in").each(function () {
        $(this).siblings(".panel-heading").find("a").removeClass("collapsed");
    });

    $('.btn-plus').on('click', function() {
        $(this).siblings('input').val( parseInt($(this).siblings('input').val(), 10) + 1);
        $(this).siblings('input');
    });
    $('.btn-minus').on('click', function() {
        if(parseInt($(this).siblings('input').val(), 10) > 1 ) {
        $(this).siblings('input').val(parseInt($(this).siblings('input').val(), 10) - 1);
    }
    });

    $('.btn-plus, .btn-minus, .quantity').on('click keyup', function() {
        var price = $('.price').attr('data-price');
        var quantity = $('.quantity').val();
        var total = price * quantity;
        var totalStr = addDotss(total);
        $('.total').text(totalStr);

        function addDotss(n){
            n = Number.parseInt(n);
            var rx=  /(\d+)(\d{3})/;
            return String(n).replace(/^\d+/, function(w){
                while(rx.test(w)){
                    w= w.replace(rx, '$1.$2');
                }
                return w;
            });
        }

    });

    $('.remove').on('click', function() {
        $(this).parents('tr').fadeOut();
    });

    if ($(window).width() > 480) {
        $(".mainmenu a[href^='#']").each(function() {
            var link = $(this).attr('href');
            goToLink(link, 120);
        });
    }
    else {
        $(".mainmenu a[href^='#']").each(function() {
            var link = $(this).attr('href');
            goToLink(link, 80);
        });
    }

    $('a[href="#logo"]').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    function goToLink(link, marginTop) {
        $('a[href="' + link +'"]').click(function () {
            $('body').removeClass('showMenu');
            $('html, body').animate({
                scrollTop: $(link).offset().top - marginTop
            }, 1000);
        });
    }

    $('.form-group > input[type="text"]').focus(function(){
        $(this).parent().addClass('input-filled');
    }).focusout(function(){
        if($(this).val() == '') {
            $(this).parent().removeClass('input-filled');
        }
    });

    $('.expert_intro_btn .btn-main').click(function (e) {
        e.preventDefault();
        $("#iframe")[0].src += "&autoplay=1";
    });
});

var orderSuccess = function(content, success) {
    var html = "",
        form = $("#order-form");
    for (var i = content.length - 1; i >= 0; i--) {
        html += "<li>" + content[i] + "</li>";
    }
    form.children('.mangosteen-message').remove();
    var classAlert = "";
    if (success) {
        form[0].reset();
        $("#orderModal").modal('hide');
        $("#successModal").modal('show');
        $(".quantity").trigger('click');
    } else {
        classAlert = 'mangosteen-message mangosteen-fail';
    }
    form.prepend("<ul class='" + classAlert + "'></ul>" );
    $('.mangosteen-message').append(html);
};


if ($(window).width() >= 1280) {
    $('#tab-2').click( function (event){
        $('#tabs').css("height", "700px");
    });

    $('#tab-1').click( function (event){
        $('#tabs').css("height", "402px");
    });
}

