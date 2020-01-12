<<<<<<< HEAD
$(document).ready( function(){
    // this will get the full URL at the address bar
    var url = window.location.href; 
    // passes on every "a" tag 
    $(".c-menu a").each(function() {
        var origin = window.location.origin+"/";
        if(url == (this.href)) {
            $(this).closest("li").addClass("is_active");
        } else {
            if(url == origin){
                $("li:first-child").addClass("is_active");
            }
        }
    });

    $('.c-btn--menu').on('click', function() {
        $(this).toggleClass('is-open');
        if($(this).hasClass('is-open')) {
          $(this).find('._open').hide();
          $(this).find('._close').show();
        //   $(".c-menu").addClass("c-menu--layout");
        } else {
          $(this).find('._open').show();
          $(this).find('._close').hide();
        }

        $('.c-menu').toggleClass('is-open');
    });
=======
$(document).ready( function(){
    // this will get the full URL at the address bar
    var url = window.location.href; 
    // passes on every "a" tag 
    $(".c-menu a").each(function() {
        var origin = window.location.origin+"/";
        if(url == (this.href)) {
            $(this).closest("li").addClass("is_active");
        } else {
            if(url == origin){
                $("li:first-child").addClass("is_active");
            }
        }
    });

    $('.c-btn--menu').on('click', function() {
        $(this).toggleClass('is-open');
        if($(this).hasClass('is-open')) {
          $(this).find('._open').hide();
          $(this).find('._close').show();
          $(".c-menu").addClass("c-menu--layout");
        } else {
          $(this).find('._open').show();
          $(this).find('._close').hide();
        }

        $('.c-menu').toggleClass('is-open');
      });
>>>>>>> 46bf2e6bb54c1c6b3823493e2d054ca7ae26dc67
})