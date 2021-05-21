/******************************************
    File Name: custom.js
/****************************************** */

(function ($) {
  "use strict";

  /* ==============================================
    AFFIX
    =============================================== */
  $(".megamenu").affix({
    offset: {
      top: 0,
      bottom: function () {
        return (this.bottom = $(".footer").outerHeight(true));
      },
    },
  });

  /* ==============================================
    BACK TOP
    =============================================== */
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      jQuery(".dmtop").css({
        bottom: "75px",
      });
    } else {
      jQuery(".dmtop").css({
        bottom: "-100px",
      });
    }
  });

  /* ==============================================
       LOADER -->
        =============================================== */

  $(window).load(function () {
    $("#preloader").on(500).fadeOut();
    $(".preloader").on(600).fadeOut("slow");
  });

  /* ==============================================
     FUN FACTS -->
     =============================================== */

  function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 50; /* Where 50 is increment */
    $this.html(++current);
    if (current > $this.data("count")) {
      $this.html($this.data("count"));
    } else {
      setTimeout(function () {
        count($this);
      }, 30);
    }
  }
  $(".stat_count, .stat_count_download").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });

  /* ==============================================
     TOOLTIP -->
     =============================================== */
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  /* ==============================================
     CONTACT -->
     =============================================== */
  jQuery(document).ready(function () {
    $("#contactform").submit(function () {
      var action = $(this).attr("action");
      $("#message").slideUp(750, function () {
        $("#message").hide();
        $("#submit")
          .after('<img src="images/ajax-loader.gif" class="loader" />')
          .attr("disabled", "disabled");
        $.post(
          action,
          {
            first_name: $("#first_name").val(),
            last_name: $("#last_name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            select_service: $("#select_service").val(),
            select_price: $("#select_price").val(),
            comments: $("#comments").val(),
            verify: $("#verify").val(),
          },
          function (data) {
            document.getElementById("message").innerHTML = data;
            $("#message").slideDown("slow");
            $("#contactform img.loader").fadeOut("slow", function () {
              $(this).remove();
            });
            $("#submit").removeAttr("disabled");
            if (data.match("success") != null)
              $("#contactform").slideUp("slow");
          }
        );
      });
      return false;
    });
  });

  /* ==============================================
     CODE WRAPPER -->
     =============================================== */

  $(".code-wrapper").on("mousemove", function (e) {
    var offsets = $(this).offset();
    var fullWidth = $(this).width();
    var mouseX = e.pageX - offsets.left;

    if (mouseX < 0) {
      mouseX = 0;
    } else if (mouseX > fullWidth) {
      mouseX = fullWidth;
    }

    $(this).parent().find(".divider-bar").css({
      left: mouseX,
      transition: "none",
    });
    $(this)
      .find(".design-wrapper")
      .css({
        transform: "translateX(" + mouseX + "px)",
        transition: "none",
      });
    $(this)
      .find(".design-image")
      .css({
        transform: "translateX(" + -1 * mouseX + "px)",
        transition: "none",
      });
  });
  $(".divider-wrapper").on("mouseleave", function () {
    $(this).parent().find(".divider-bar").css({
      left: "50%",
      transition: "all .3s",
    });
    $(this).find(".design-wrapper").css({
      transform: "translateX(50%)",
      transition: "all .3s",
    });
    $(this).find(".design-image").css({
      transform: "translateX(-50%)",
      transition: "all .3s",
    });
  });
})(jQuery);

$(document).ready(function () {
  $("#windows").hide(1);
  $("#others").hide(1);
  $(".door").css("background-color", "#0165da");
  $(".door").css("color", "white");
});

$(document).ready(function () {
  $(".window").click(function () {
    $(".window").css("background-color", "#0165da");
    $(".window").css("color", "white");
    if (!$("#windows").is(":visible")) {
      $("#windows").show(2);
      $("#doors").hide(2);
      $(".door").css("background-color", "#EFEFEF");
      $(".door").css("color", "#999999");
      $("#others").hide(1);
      $(".other").css("background-color", "#EFEFEF");
      $(".other").css("color", "#999999");
      $("#stairs").hide(1);
      $(".stair").css("background-color", "#EFEFEF");
      $(".stair").css("color", "#999999");
    }
  });
  $(".door").click(function () {
    $(".door").css("background-color", "#0165da");
    $(".door").css("color", "white");
    if (!$("#doors").is(":visible")) {
      $("#doors").show();
      $(".window").css("background-color", "#EFEFEF");
      $(".window").css("color", "#999999");
      $("#windows").hide(1);
      $("#others").hide(1);
      $(".other").css("background-color", "#EFEFEF");
      $(".other").css("color", "#999999");
      $("#stairs").hide(1);
      $(".stair").css("background-color", "#EFEFEF");
      $(".stair").css("color", "#999999");
    }
  });
  $(".other").click(function () {
    $(".other").css("background-color", "#0165da");
    $(".other").css("color", "white");
    if (!$("#others").is(":visible")) {
      $("#others").show();
      $("#windows").hide(1);
      $(".window").css("background-color", "#EFEFEF");
      $(".window").css("color", "#999999");
      $("#doors").hide(1);
      $(".door").css("background-color", "#EFEFEF");
      $(".door").css("color", "#999999");
      $("#stairs").hide(1);

      $(".stair").css("background-color", "#EFEFEF");
      $(".stair").css("color", "#999999");
    }
  });
  $(".stair").click(function () {
    $(".stair").css("background-color", "#0165da");
    $(".stair").css("color", "white");
    if (!$("#stairs").is(":visible")) {
      $("#stairs").show();
      $("#windows").hide(1);
      $(".window").css("background-color", "#EFEFEF");
      $(".window").css("color", "#999999");
      $("#doors").hide(1);
      $(".door").css("background-color", "#EFEFEF");
      $(".door").css("color", "#999999");
      $("#others").hide(1);
      $(".other").css("background-color", "#EFEFEF");
      $(".other").css("color", "#999999");
    }
  });
});
$(".rename").click(function (e) {
  e.preventDefault();
  var $this = $(this);
  var fileName = $(this).data("file");
  $("#basicModal").data("fileName", fileName).modal("toggle", $this);
});
