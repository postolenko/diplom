var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {

  if($(".scroll_x").length > 0) {
    $(".scroll_x").mCustomScrollbar({
      axis:"x"
    });
  }

});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".slider").length > 0 ) {
        $(".slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 2000,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            appendDots: $(".slider_dots"),
            appendArrows: $(".slider_arrows"),
            // fade: true,
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //       }
            //     },
            //     {
            //       breakpoint: 540,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
        });
    }

    // -------------

    $(document).on("click", ".checkout_list [data-option-val]",  function(e) {
      e.preventDefault();
      parent = $(this).closest(".custom_select");
      val = $(this).attr("data-option-val");
      parent.find(".p_val").text(val);
      parent.find("input[type='hidden']").val(val);
      parent.removeClass("active");
      parent.find("[data-option-val]").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".custom_select .p_val", function(e) {
      e.preventDefault();
      parent = $(this).closest(".custom_select");
      if(parent.hasClass("active")) {
        parent.removeClass("active");
      } else {
        $(".custom_select").removeClass("active");
        parent.addClass("active");
      }
    });

    $(document).mouseup(function(e) {
      hide_element = $(".custom_select");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          hide_element.removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".custom_select").removeClass("active");
      }
    });

    // -----------

    new AirDatepicker('#data', {
      dateFormat: 'dd.MM.yy'
    });

    new AirDatepicker('#time',{
      timepicker: true,
      onlyTimepicker: true,
      position: "bottom right"
    });

    // ------------

    $(".dr").each(function() {
      drContent = $(this).find(".dr_content");
      if($(this).hasClass("active")) {      
        drContent.slideDown(300);
      } else {
        drContent.slideUp(300);
      }
    });

    $(".dr_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dr");
      sl = parent.find(".dr_content");
      if(sl.is(":hidden")) {
        parent.addClass("active");
        sl.slideDown(300);
      } else {
        parent.removeClass("active");
        sl.slideUp(300);
      }
    });

    $(document).mouseup(function(e) {
      hide_element = $(".dr");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          hide_element.removeClass("active");
          hide_element.find(".dr_content").slideUp(300);
        }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
          $(".dr_content").slideUp(300);
          $(".dr").removeClass("active");
      }
    });

    // ------------

    $(".tab_link").click(function(e) {
      parent = $(this).closest(".tab_list");
      parent.find(".tab_link").removeClass("active");
      $(this).addClass("active");
    });

    // ------------

    if( $(".inner_slider").length > 0 ) {
      $(".inner_slider").not(".slick-initialized").slick({
          dots: true,
          arrows: false,
          // autoplay: true,
          // autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1
          // fade: true
      });
    }

    if( $(".contacts_slider").length > 0 ) {
      $(".contacts_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          // autoplay: true,
          // autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          appendArrows: $(".contacts_slider_arrow")
      });
    }

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // ----------------

    var fileInput = document.querySelector("#myfiles");
    var pullfiles=function(){      
        var files = fileInput.files;
        var fl=files.length;
        var i=0;
        var dropArea = $("#dropArea");
        var templ = "";
        var file;
        var parent = $("#dropSect");
        var fileList = $("#fileList");
        var templHTML = $(".item_templ");
        while ( i < fl) {
            file = files[i];
            fileUrl = URL.createObjectURL(file);
            fileName = file.name;
            fileSize = parseInt(file.size / 1000) + " кб";
            if(fileUrl) {
              $(".file_item_hidden .item_templ .filename").html(fileName);
              $(".file_item_hidden .item_templ .filesize").html(fileSize);
              templ += $( ".file_item_hidden").html();
            }
            i++;
        }
        fileList.prepend(templ);

        // new Sortable(document.getElementById('dropArea'), {
        //     onEnd: function (evt) {
        //       $("#dropArea .upl_btn").appendTo($("#dropArea"));
        //     }
        // });

    }

    if($("#myfiles").length > 0 ) {
      document.querySelector("#myfiles").onchange=pullfiles;
      dropArea.addEventListener('dragover', (event) => {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
      });
      dropArea.addEventListener('drop', (event) => {
        event.stopPropagation();
        event.preventDefault();
        var files = event.dataTransfer.files;
          var fl=files.length;
          var i=0;
          var dropArea = $("#dropArea");
          var templ = "";
          var file;
          var parent = $("#dropSect");
          var fileList = $("#fileList");
          var templHTML = $(".item_templ");
          while ( i < fl) {
              file = files[i];
              fileUrl = URL.createObjectURL(file);
              fileName = file.name;
              fileSize = parseInt(file.size / 1000) + " кб";
              if(fileUrl) {
                $(".file_item_hidden .item_templ .filename").html(fileName);
                $(".file_item_hidden .item_templ .filesize").html(fileSize);
                templ += $( ".file_item_hidden").html();
              }
              i++;
          }
          fileList.prepend(templ);
          // new Sortable(document.getElementById('dropArea'), {
          //     onEnd: function (evt) {
          //       $("#dropArea .upl_btn").appendTo($("#dropArea"));
          //     }
          // });

      });
    }

    // -----------------

    $(document).on("click",".del", function(e) {
      e.preventDefault();
      parent = $(this).closest(".file_item");
      parent.remove();
    });

});