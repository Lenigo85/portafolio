$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if(valor == 'todos'){
            $('.cont-work').show('1000');
        }else{
            $('.cont-work').not('.'+ valor).hide('1000');
            $('.cont-work').filter('.'+ valor).show('1000');
        }
    });

    let portfolio = $('#portfolio').offset().top,
        habilidad = $('#habilidad').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let portfolio = $('#portfolio').offset().top,
        habilidad = $('#habilidad').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-portfolio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: portfolio -100
        },600);
    });

    $('#enlace-habilidad').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: habilidad -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});