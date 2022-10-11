function orderItem() {
    prompt("Enter shipping address please")
        
};


$(document).ready(function() {
    $('h3').mouseenter(function() {
        $(this).css('color', 'red')
    })

    $('h3').mouseleave(function() {
        $(this).css('color', 'black')
    })

    //footwear

    $('.footwear1').hide()
    $('.footwear2').hide()
    $('.footwear3').hide()
    $('.footwear4').hide()
    $('.footwear5').hide()
    $('.footwear6').hide()
    $('.footwear7').hide()
    $('.footwear8').hide()




    $('.btn-footwear').click(function() {

        $('.footwear1').fadeIn(1000)
        $('.footwear2').fadeIn(1000)
        $('.footwear3').fadeIn(1000)
        $('.footwear4').fadeIn(1000)
        $('.footwear5').fadeIn(1000)
        $('.footwear6').fadeIn(1000)
        $('.footwear7').fadeIn(1000)
        $('.footwear8').fadeIn(1000)

    })



    //electronics

    $('.e1').hide()
    $('.e2').hide()
    $('.e3').hide()
    $('.e4').hide()
    $('.e5').hide()
    $('.e6').hide()
    $('.e7').hide()
    $('.e8').hide()

    $('.btn-electronics').click(function() {

        $('.e1').fadeIn(1000)
        $('.e2').fadeIn(1000)
        $('.e3').fadeIn(1000)
        $('.e4').fadeIn(1000)
        $('.e5').fadeIn(1000)
        $('.e6').fadeIn(1000)
        $('.e7').fadeIn(1000)
        $('.e8').fadeIn(1000)

    })

    //toys

    $('.jeep').hide()
    $('.red-car').hide()
    $('.orange-car').hide()
    $('.bike1').hide()
    $('.bike2').hide()
    $('.bike3').hide()
    $('.bike4').hide()
    $('.bike5').hide()

    $('.btn-toy').click(function() {
        $('.jeep').fadeIn(1000)
        $('.red-car').fadeIn(1000)
        $('.orange-car').fadeIn(1000)
        $('.bike1').fadeIn(1000)
        $('.bike2').fadeIn(1000)
        $('.bike3').fadeIn(1000)
        $('.bike4').fadeIn(1000)
        $('.bike5').fadeIn(1000)
    })

    //hardware

    $('.hard1').hide()
    $('.hard2').hide()
    $('.hard3').hide()
    $('.hard4').hide()
    $('.hard5').hide()
    $('.hard6').hide()
    $('.hard7').hide()
    $('.hard8').hide()

    $('.btn-hardware').click(function() {

        $('.hard1').fadeIn(1000)
        $('.hard2').fadeIn(1000)
        $('.hard3').fadeIn(1000)
        $('.hard4').fadeIn(1000)
        $('.hard5').fadeIn(1000)
        $('.hard6').fadeIn(1000)
        $('.hard7').fadeIn(1000)
        $('.hard8').fadeIn(1000)

    })

    // cosmotics 

    $('.cosmo1').hide()
    $('.cosmo2').hide()
    $('.cosmo3').hide()
    $('.cosmo4').hide()
    $('.cosmo5').hide()
    $('.cosmo6').hide()
    $('.cosmo7').hide()
    $('.cosmo8').hide()

    $('.btn-cosmo').click(function() {

        $('.cosmo1').fadeIn(1000)
        $('.cosmo2').fadeIn(1000)
        $('.cosmo3').fadeIn(1000)
        $('.cosmo4').fadeIn(1000)
        $('.comso5').fadeIn(1000)
        $('.cosmo6').fadeIn(1000)
        $('.cosmo7').fadeIn(1000)
        $('.cosmo8').fadeIn(1000)

    })

    //fashion

    $('.dress1').hide()
    $('.dress2').hide()
    $('.dress3').hide()
    $('.dress4').hide()
    $('.dress5').hide()
    $('.dress6').hide()
    $('.dress7').hide()
    $('.dress8').hide()
    
    $('.btn-fash').click(function() {

        $('.dress1').fadeIn(1000)
        $('.dress2').fadeIn(1000)
        $('.dress3').fadeIn(1000)
        $('.dress4').fadeIn(1000)
        $('.dress5').fadeIn(1000)
        $('.dress6').fadeIn(1000)
        $('.dress7').fadeIn(1000)
        $('.dress8').fadeIn(1000)

    })


    $('.para-container').hide()

    $('.slide-link').mouseenter(function(){
        $('.para-container').show()
        $(this).hide()
    })


    $('.footer-head').mouseenter(function() {
        $(this).css('color', 'green')
    })


    $('.footer-head').mouseleave(function() {
        $(this).css('color', 'white')
    })





    $('.rp').hide()

    $('.resources').click(function() {
        $(this).css('color', 'red')
        $('.rp').animate({height: 'toggle'})
        $('.rp').css('color', 'white')
    })

    $('.rev-p').hide()

    $('.revenue').click(function() {
        $(this).css('color', 'red')
        $('.rev-p').animate({height: 'toggle'})
        $('.rev-p').css('color', 'white')
    })

    $('.rew-p').hide()

    $('.rewards').click(function() {
        $(this).css('color', 'red')
        $('.rew-p').animate({height: 'toggle'})
        $('.rew-p').css('color', 'white')
    })

    $('.help-p').hide()

    $('.helpdesk').click(function() {
        $(this).css('color', 'red')
        $('.help-p').animate({height: 'toggle'})
        $('.help-p').css('color', 'white')
    })

    








    // var width = 500;
    // var animationSpeed = 1000;
    // var pause = 2000;
    // var currentSlide = 1;


    // var $slider = $('#slider');
    // var $sliderAnimation = $slider.find('.slides');
    // var $slides = $sliderAnimation.find('.slide')


    // setInterval(function() {
    //     $sliderAnimation.animate({'margin-left': '-='+width}, animationSpeed, function() {
    //         currentSlide++;
    //         if(currentSlide == $slides.length) {
    //             $sliderAnimation.css('margin-left', 0)

    //             currentSlide = 1;
    //         }


    //     })
    // }, pause);




});