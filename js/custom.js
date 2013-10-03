
/* -- NiceScroll
   -- src: www.areaaperta.com/nicescroll
   ---------------------------- */

$(document).ready(function() {
  $("html").niceScroll({
    cursorcolor: "#2C2F35"
  });
});



/* -- Portfolio hover
   ---------------------------- */

$(document).ready(function() {
  $('.viewport').mouseenter(function(e) {
    $(this).children('a').children('span').fadeIn(200);
  }).mouseleave(function(e) {
    $(this).children('a').children('span').fadeOut(200);
  });
});



/* -- Magnific Popup (Responsive Lightbox)
   -- src: www.dimsemenov.com/plugins/magnific-popup
   ---------------------------- */

$(document).ready(function() {
  $('.lightbox').magnificPopup({
    type: 'image',

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 100,
    mainClass: 'my-mfp-slide-bottom',

    image: {
      verticalFit: true
    }
  });

  $('.modal-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#fullname',
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#fullname';
        }
      }
    }
  });

});
/* -- Bxslider
   -- src: www.bxslider.com
   ---------------------------- */

$(function() {

  $('.projectslider').bxSlider({
    auto: true,
    autoControls: false,
    mode: 'fade',
    pager: true
  });

  $('.teamslider').bxSlider({
    slideWidth: 300,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10
  });
});



/* -- Sticky Animated Header
   -- src: xxx
   ---------------------------- */

var header = $('header');
var logo = $('.logo');
var navmenu = $('header .nav-menu');

$(window).scroll(function(e) {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 50) {
    header.stop().animate({
      height: "80px",
      backgroundColor: "#f6f6f6",
      queue: false
    }, 300, 'linear');
    logo.stop().animate({
      margin: "1.5em 0 0 0",
      queue: false
    }, 300, 'linear');
    navmenu.stop().animate({
      margin: "1.2em 0 0 0",
      queue: false
    }, 300, 'linear');

  } else {
    header.stop().animate({
      height: "100px",
      backgroundColor: "none",
      queue: false
    }, 300, 'linear');
    logo.stop().animate({
      margin: "1.3em 0 0",
      queue: false
    }, 300, 'linear');
    navmenu.stop().animate({
      margin: "1em 0",
      queue: false
    }, 300, 'linear');
  }
});

function animateHeader() {
  siteHeader = $("header");
  siteHeaderHeight = siteHeader.outerHeight();

  if (siteHeader.offset().top > siteHeaderHeight) {
    siteHeader.removeClass("transparent");
  } else {
    siteHeader.addClass("transparent");
  }
}

animateHeader();

$(window).scroll(function() {
  animateHeader();
});


/* -- Projects isotope sorting
   -- src: http://isotope.metafizzy.co/
   ---------------------------- */


var $container = $('#container');
// initialize Isotope
$container.isotope({
  layoutMode: 'fitRows'
});


var $optionSets = $('#options .option-set'),
  $optionLinks = $optionSets.find('a');

$optionLinks.click(function() {
  var $this = $(this);
  if ($this.hasClass('selected')) {
    return false;
  }
  var $optionSet = $this.parents('.option-set');
  $optionSet.find('.selected').removeClass('selected');
  $this.addClass('selected');

  var options = {},

    key = $optionSet.attr('data-option-key'),
    value = $this.attr('data-option-value');

  value = value === 'false' ? false : value;
  options[key] = value;

  if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
    changeLayoutMode($this, options);
  } else {
    $container.isotope(options);
  }

  return false;
});

$(window).resize(function() {
  $container.isotope('reLayout');
});


/* -- gMap integration
   -- src: http://labs.mario.ec/jquery-gmap/
   ---------------------------- */

$(function() {
  $('#map_controls').gMap({
    latitude: 33.6598,
    longitude: -117.877713,
    maptype: 'ROADMAP', // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
    zoom: 15,
    controls: {
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: false
    },
    markers: [{
        latitude: 33.704253,
        longitude: -117.852758
      }
    ]
  });
});


/* -- Page Slider
   -- src: https://github.com/davist11/jQuery-One-Page-Nav
   ---------------------------- */

// $(document).ready(function() {
//   $('header nav').onePageNav({
//     currentClass: 'current',
//     changeHash: false,
//     scrollSpeed: 750,
//     scrollOffset: 25,
//     scrollThreshold: 0.1,
//     filter: '',
//     easing: 'swing',
//     begin: function() {
//       $('body').append('<div id="device-dummy" style="height: 1px;"></div>');
//     },
//     end: function() {
//       $('#device-dummy').remove();
//     },
//     scrollChange: function($currentListItem) {
//         //I get fired when you enter a section and I pass the list item of the section
//     }
//   });
// });

$(document).ready(function() {

  $('header nav').localScroll({
    offset: -20,
    duration: 750,
    hash: false
  });

  $('header nav').find('a').click(selectNav);

  function selectNav() {
    $(this)
      .parents('ul:first')
      .find('a')
      .removeClass('current')
      .end()
      .end()
      .addClass('current');
  }

  function trigger(data) {
    var el = $('header nav').find('a[href$="' + data.id + '"]').get(0);
    selectNav.call(el);
  }
  $('.scrollTo').localScroll();
  $('#logo-wrapper').localScroll();

});



/* -- Smooth Scroll to Top
------------------------- */

$(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});



/* -- NaturaL Language Hero Form
   ---------------------------- */

var nlform = new NLForm(document.getElementById('nl-form'));


var el = document.querySelector('.md-slider'),
  settings = {
    autoplay: false,
    interval: 3000,
    devices: [{
        cName: 'md-device-1',
        canRotate: false,
        imgsrc: ''
      }, {
        cName: 'md-device-2',
        canRotate: false,
        imgsrc: ''
      }, {
        cName: 'md-device-3',
        canRotate: true,
        imgsrc: '',
        rotatedsrc: ''
      }, {
        cName: 'md-device-4',
        canRotate: true,
        imgsrc: '',
        rotatedsrc: ''
      }
    ]
  },
  devicesTotal = settings.devices.length,
  ds = MorphingDevice(el, settings);

// create navigation triggers
var nav = document.createElement('nav');
for (var i = 0; i < devicesTotal; ++i) {

  var trigger = document.createElement('a');
  trigger.className = i === 0 ? 'md-current' : '';
  trigger.setAttribute('href', '#');
  trigger.setAttribute('pos', i);
  trigger.onclick = function(event) {

    ds.stopSlideshow();
    var pos = Number(event.target.getAttribute('pos'));
    if (pos === ds.getCurrent()) {
      return false;
    }
    ds.updateCurrentTrigger(event.target);
    ds.setCurrent(pos);
    ds.changeDevice();
    return false;

  };
  nav.appendChild(trigger);

}
el.appendChild(nav);

if (settings.autoplay) {
  ds.startSlideshow();
}

/* -- Responsive Nav
   -- src: http://www.meanthemes.com/plugins/meanmenu/
   ---------------------------- */

$(function() {
  $('header nav').meanmenu({
    meanScreenWidth: "979"
  });
});