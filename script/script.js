$(document).ready(function(){
    var owl = $('.owl-carousel');
    WebpIsSupported(function(isSupported){
        if(isSupported){
            $.each($('img'), function (){
                this.src = this.getAttribute('data-src').split(',')[0];
            });
        }else{
            $.each($('img'), function (){
                this.src = this.getAttribute('data-src').split(',')[1];
            });
        }
        });

    owl.owlCarousel({
        loop:true,
        margin:30,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1300:{
                items:4
            }
        }
    });
    $(".h-menu__left-about").click(function() {
        HideMenu();
        $(".c-about").scrollTo();
    });
    $(".h-menu__left-contact").click(function() {
        HideMenu();
        $(".c-contact-headline").scrollTo();
    });
    $(".h-menu__left-customers").click(function() {
        HideMenu();
        $(".c-customers").scrollTo();
    });
    $(".scrollToTop").click(function() {
        $("body").scrollToTop();
    });
    window.addEventListener('scroll', function() {
        if(pageYOffset>100){
            $(".scrollToTop").fadeIn("fast")
        }else{
            $(".scrollToTop").fadeOut("fast")
        }
    });
    $(".h-menu__left-order").click(function() {
        HideMenu();
        $("html").css('overflow-y','hidden');
        $(".c-order").fadeIn("fast");
    });
    $(".c-quality-buttons-order").click(function() {
        HideMenu();
        $("html").css('overflow-y','hidden');
        $(".c-order").fadeIn("fast");
    });
    $(".c-order-close").click(function() {
        $("html").css('overflow-y','scroll');
        $(".c-order").fadeOut("fast");
        $('.c-order-form').show();
        $('.c-order-error').hide();
        $('.c-order-sended').hide();
        $('.c-order-loading').css('display','none');
        $('.c-order-form-name-input').val('');
        $('.c-order-form-number-input').val('');
        $('.c-order-form-mail-input').val('');
        $('.c-order-form-description-input').val('');
    });
    
    $(".h-menu__left-cost").click(function() {
        HideMenu();
        $("html").css('overflow-y','hidden');
        $(".c-cost").fadeIn("fast");
    });
    $(".c-quality-buttons-cost").click(function() {
        HideMenu();
        $("html").css('overflow-y','hidden');
        $(".c-cost").fadeIn("fast");
    });
    $(".c-cost-close").click(function() {
        $("html").css('overflow-y','scroll');
        $(".c-cost").fadeOut("fast");
        $('.c-cost-form').show();
        $('.c-cost-error').hide();
        $('.c-cost-sended').hide();
        $('.c-cost-loading').css('display','none');
        $('.c-cost-form-name-input').val('');
        $('.c-cost-form-number-input').val('');
        $('.c-cost-form-mail-input').val('');
        $('.c-cost-form-description-input').val('');
    });

    $(".h-menu__left-call").click(function() {
        HideMenu();
        $("html").css('overflow-y','hidden');
        $(".c-call").fadeIn("fast");
    });
    $(".c-quality-buttons-call").click(function() {
        HideMenu();
        $("html").css('overflow-y','hidden');
        $(".c-call").fadeIn("fast");
    });
    $(".c-call-close").click(function() {
        $("html").css('overflow-y','scroll');
        $(".c-call").fadeOut("fast");
        $('.c-call-form').show();
        $('.c-call-error').hide();
        $('.c-call-sended').hide();
        $('.c-call-loading').css('display','none');
        $('.c-call-form-name-input').val('');
        $('.c-call-form-number-input').val('');
    });

    $(".h-buttonMenu").click(function() {
        $("html").css('overflow-y','hidden');
        $(".h-menu").fadeIn("fast");
        $(".h-menu").css('display','flex');
    });
    $(".h-menu-close").click(function() {
        $("html").css('overflow-y','scroll');
        $(".h-menu").fadeOut("fast");
        $(".h-menu").css('display','none');
    });


    $(function(){
        $(".form-nubmer").mask("+7(999) 999-9999");
    });
    $('input').keydown(function(e){
        if (e.keyCode == 65 && e.ctrlKey) {
            e.target.select()
        }
    
    });
    $('textarea').keydown(function(e){
        if (e.keyCode == 65 && e.ctrlKey) {
            e.target.select()
        }
    
    })


    $('.c-swipe').swipeleft(function(e) {
        $("html").css('overflow-y','hidden');
        $(".h-menu").fadeIn("fast");
        $(".h-menu").css('display','flex');
    });
    $(".h-menu").on("swiperight", function(){
        HideMenu();
    });

    $('.c-order-form-name-input').click(function () {
        $('.c-order-form-name-input').css('border-color','white')
    })
    $('.c-order-form-number-input').click(function () {
        $('.c-order-form-number-input').css('border-color','white')
    })
    $('.c-order-form-mail-input').click(function () {
        $('.c-order-form-mail-input').css('border-color','white')
    })
    $('.c-order-form-description-input').click(function () {
        $('.c-order-form-description-input').css('border-color','white')
    })
    $('.c-order-form-submit').click(function(){
        var Name = $('.c-order-form-name-input');
        var Number = $('.c-order-form-number-input');
        var Mail = $('.c-order-form-mail-input');
        var Description = $('.c-order-form-description-input');
        let isValid = (Mail.val().match(/.+?\@.+/g) || []).length === 1;
        if (isValid === true){
            if(checkInputEmpty(Name)==0){
                $('.c-order-form-name-input').css('border-color','red')
                return;
            }
            if(checkInputEmpty(Number)==0){
                $('.c-order-form-number-input').css('border-color','red')
                return;
            }
            if(checkInputEmpty(Description)==0){
                $('.c-order-form-description-input').css('border-color','red')
                return;
            }
            $('.c-order-loading').css('display','block')
            $('.c-order-form').hide()
            $.ajax({
                method: "POST", 
                url: "../php/send.php", 
                data: { 
                    event:'order',
                    name: Name.val(),
                    number: Number.val(),
                    mail: Mail.val(),
                    description: Description.val()
                },
                success: function ( msg ) { 
                    if(msg=='SENDED'){
                        ym(68507137,'reachGoal','FORMA')
                        $('.c-order-sended').show()
                        $('.c-order-loading').css('display','none')
                    }else{
                        $('.c-order-error').show()
                        $('.c-order-loading').css('display','none')
                    }
                },
                statusCode: {
                  404: function () {
                    $('.c-order-error').show()
                    $('.c-order-loading').css('display','none')
                  }
                }
            })
        }else if (checkInputEmpty(Mail)!=0){
            alert('Вы ввели некорректный e-mail');
        }else{
            $('.c-order-form-mail-input').css('border-color','red')
        }
    });
    
    $('.c-call-form-name-input').click(function () {
        $('.c-call-form-name-input').css('border-color','white')
    })
    $('.c-call-form-number-input').click(function () {
        $('.c-call-form-number-input').css('border-color','white')
    })
    $('.c-call-form-submit').click(function(){
        var Name = $('.c-call-form-name-input');
        var Number = $('.c-call-form-number-input');
        if(checkInputEmpty(Name)==0){
            $('.c-call-form-name-input').css('border-color','red')
            return;
        }
        if(checkInputEmpty(Number)==0){
            $('.c-call-form-number-input').css('border-color','red')
            return;
        }
        $('.c-call-loading').css('display','block')
        $('.c-call-form').hide()
        $.ajax({
            method: "POST", 
            url: "../php/send.php", 
            data: { 
                event:'call',
                name: Name.val(),
                number: Number.val()
            },
            success: function ( msg ) { 
                if(msg=='SENDED'){
                    ym(68507137,'reachGoal','zakazZvonka')
                    $('.c-call-sended').show()
                    $('.c-call-loading').css('display','none')
                }else{
                    console.log(msg)
                    $('.c-call-error').show()
                    $('.c-call-loading').css('display','none')
                }
            },
            statusCode: {
              404: function () {
                $('.c-call-error').show()
                $('.c-call-loading').css('display','none')
              }
            }
        })
    });
    
    $('.c-cost-form-name-input').click(function () {
        $('.c-cost-form-name-input').css('border-color','white')
    })
    $('.c-cost-form-number-input').click(function () {
        $('.c-cost-form-number-input').css('border-color','white')
    })
    $('.c-cost-form-mail-input').click(function () {
        $('.c-cost-form-mail-input').css('border-color','white')
    })
    $('.c-cost-form-description-input').click(function () {
        $('.c-cost-form-description-input').css('border-color','white')
    })
    $('.c-cost-form-submit').click(function(){
        var Name = $('.c-cost-form-name-input');
        var Number = $('.c-cost-form-number-input');
        var Mail = $('.c-cost-form-mail-input');
        var Description = $('.c-cost-form-description-input');
        let isValid = (Mail.val().match(/.+?\@.+/g) || []).length === 1;
        if (isValid === true){
            if(checkInputEmpty(Name)==0){
                $('.c-cost-form-name-input').css('border-color','red')
                return;
            }
            if(checkInputEmpty(Number)==0){
                $('.c-cost-form-number-input').css('border-color','red')
                return;
            }
            if(checkInputEmpty(Description)==0){
                $('.c-cost-form-description-input').css('border-color','red')
                return;
            }
            $('.c-cost-loading').css('display','block')
            $('.c-cost-form').hide()
            $.ajax({
                method: "POST", 
                url: "../php/send.php", 
                data: { 
                    event:'cost',
                    name: Name.val(),
                    number: Number.val(),
                    mail: Mail.val(),
                    description: Description.val()
                },
                success: function ( msg ) { 
                    if(msg=='SENDED'){
                        ym(68507137,'reachGoal','uznatStoimost')
                        $('.c-cost-sended').show()
                        $('.c-cost-loading').css('display','none')
                    }else{
                        $('.c-cost-error').show()
                        $('.c-cost-loading').css('display','none')
                    }
                },
                statusCode: {
                  404: function () {
                    $('.c-cost-error').show()
                    $('.c-cost-loading').css('display','none')
                  }
                }
            })
        }else if (checkInputEmpty(Mail)!=0){
            alert('Вы ввели некорректный e-mail');
        }else{
            $('.c-cost-form-mail-input').css('border-color','red')
        }
    });
});

$(".h-menu__left-order").click(function() {
    ym(68507137,'reachGoal','POCHTA');
});

$(".h-menu__left-call").click(function() {
    ym(68507137,'reachGoal','ZVONOK');
});

function HideMenu (){
    if($('.h-buttonMenu').css('display')=='block'){
        if($('.h-menu').css('display')=='flex'){
            $("html").css('overflow-y','scroll');
            $(".h-menu").fadeOut("fast");
            $(".h-menu").css('display','none');
        }
    }
}

function checkInputEmpty (data) {
    if (data.val().length!=0){
        return true;
    }else{
        return false;
    }
}

function WebpIsSupported(callback){
    // If the browser doesn't has the method createImageBitmap, you can't display webp format
    if(!window.createImageBitmap){
    callback(false);
    return;
    }
    // Base64 representation of a white point image
    var webpdata = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';
    // Retrieve the Image in Blob Format
    fetch(webpdata).then(function(response){
    return response.blob();
    }).then(function(blob){
    // If the createImageBitmap method succeeds, return true, otherwise false
    createImageBitmap(blob).then(function(){
    callback(true);
    }, function(){
    callback(false);
    });
    });
    }