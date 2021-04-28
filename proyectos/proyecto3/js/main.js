$(document).ready(function () {

    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true,
            page: true
        });
    }

    // Posts
    if(window.location.href.indexOf('index') > -1){
            var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit nulla, quis commodo nunc. Suspendisse eget tellus ac ligula placerat bibendum eu at orci. Sed suscipit condimentum pharetra. Aenean imperdiet vulputate magna sed tempus.Nulla nec ultrices nibh, vitae vehicula ipsum. Donec pharetra sodales nisi. Etiam accumsan molestie turpis, a euismod lectus lacinia vitae. Praesent pharetra sapien vitae dictum ornare.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit nulla, quis commodo nunc. Suspendisse eget tellus ac ligula placerat bibendum eu at orci. Sed suscipit condimentum pharetra. Aenean imperdiet vulputate magna sed tempus.Nulla nec ultrices nibh, vitae vehicula ipsum. Donec pharetra sodales nisi. Etiam accumsan molestie turpis, a euismod lectus lacinia vitae. Praesent pharetra sapien vitae dictum ornare.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit nulla, quis commodo nunc. Suspendisse eget tellus ac ligula placerat bibendum eu at orci. Sed suscipit condimentum pharetra. Aenean imperdiet vulputate magna sed tempus.Nulla nec ultrices nibh, vitae vehicula ipsum. Donec pharetra sodales nisi. Etiam accumsan molestie turpis, a euismod lectus lacinia vitae. Praesent pharetra sapien vitae dictum ornare.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit nulla, quis commodo nunc. Suspendisse eget tellus ac ligula placerat bibendum eu at orci. Sed suscipit condimentum pharetra. Aenean imperdiet vulputate magna sed tempus.Nulla nec ultrices nibh, vitae vehicula ipsum. Donec pharetra sodales nisi. Etiam accumsan molestie turpis, a euismod lectus lacinia vitae. Praesent pharetra sapien vitae dictum ornare.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit nulla, quis commodo nunc. Suspendisse eget tellus ac ligula placerat bibendum eu at orci. Sed suscipit condimentum pharetra. Aenean imperdiet vulputate magna sed tempus.Nulla nec ultrices nibh, vitae vehicula ipsum. Donec pharetra sodales nisi. Etiam accumsan molestie turpis, a euismod lectus lacinia vitae. Praesent pharetra sapien vitae dictum ornare.'
            },
            {
                title: 'Prueba de titulo 6',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit nulla, quis commodo nunc. Suspendisse eget tellus ac ligula placerat bibendum eu at orci. Sed suscipit condimentum pharetra. Aenean imperdiet vulputate magna sed tempus.Nulla nec ultrices nibh, vitae vehicula ipsum. Donec pharetra sodales nisi. Etiam accumsan molestie turpis, a euismod lectus lacinia vitae. Praesent pharetra sapien vitae dictum ornare.'
            },
        ];

        posts.forEach((item, index) => {
            var post = `
                        <article class="post">
                            <h2>${item.title}</h2>
                            <span class="date">${item.date}</span>
                            <p>
                                ${item.content}
                            </p>
                            <a href="#" class="button-more">Leer más</a>
                        </article>
                        `;

                        $("#posts").append(post);
        });
    }

    // Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso
    $("#login form").submit(function(){
        var form_user = $("#form_user").val();

        localStorage.setItem("form_user", form_user);
    });

    var form_user = localStorage.getItem("form_user");

    if(form_user != null && form_user != "undefined"){
        
        var login_successful = $("#login_successful");
        login_successful.html("<br><p><strong>Bienvenido "+form_user+"</strong></p>");

        $("#login").hide();

        login_successful.append("<br><p><a href='#' id='logout'>Cerrar sesión</a></p>");
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format('hh:mm:ss a');
            $('#reloj').html(reloj);
        }, 1000);
    }

    // Validación
    if(window.location.href.indexOf('contacto') > -1){
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});