$(document).ready(function () {
    if ($(document).scrollTop() != 0) {
        $("#logoContainer").removeClass("large").addClass("small");
        $("#siteLogo").attr("src", "/static/icons/main-logo-small.png");
    };

    $(document).on("scroll", function () {

        if ($(document).scrollTop() > 100) {
            $("#logoContainer").removeClass("large").addClass("small");
            $("#siteLogo").attr("src", "/static/icons/main-logo-small.png");
        } else {
            $("#logoContainer").removeClass("small").addClass("large");
            $("#siteLogo").attr("src", "/static/icons/main-logo.png");
        }

    });

    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    // Add smooth scrolling on all links inside the navbar
    $("#navbarCollapse a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            $hash = $(hash);

            if (location.pathname.includes("roles") || location.pathname.includes("stats") || location.pathname.includes("contact")) {

                window.location.href = "/" + this.hash;

                return false;
            }

            $('html, body').stop().animate({
                'scrollTop': $hash.offset().top + 2 // scrolls to the link
            }, 500, 'swing', function () {
                window.location.hash = hash;
            });

        } // End if
    });

    $("#logoContainer a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: 0
            }, 800, function () {
                return false;
            });
        } // End if
    });

    // if (location.pathname.includes("roles") || location.pathname.includes("stats") || location.pathname.includes("contact")) {
    //     $("#logoContainer a").attr("href", "/");

    //     $("#about").attr("href", "/");
    //     $("#team").attr("href", "/");
    //     $("#weeklyChallenge").attr("href", "/");
    // }
});