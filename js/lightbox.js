jQuery(document).ready(function($) {
  $('.lightbox_trigger').click(function(e) {

      //prevent default action (hyperlink)
      e.preventDefault();

      //Get image src, title, subtitle and text
      var image = $(this).attr("href");
      var title = $(this).find("h3").text();
      var curSubtitle = $(this).find("p.subtitle");
      var subtitle = curSubtitle.clone();
      subtitle.find("br").replaceWith(" | ");
      subtitle = subtitle.text();
      var text = $(this).find("p.hiddentext").text();
      var appstore = $(this).find("p.appstore").text();
      var googleplay = $(this).find("p.googleplay").text();

      var inStore = false;

      if ($(this).find("h3").hasClass("inStore")) {
        inStore = true;
      }


      //If the lightbox window HTML already exists in document,
      //change the img src to to match the href of whatever link was clicked
      if ($('#lightbox').length > 0) {

        $('#content').html(htmlInject(image, title, subtitle, text, appstore, googleplay, inStore));

        $('#lightbox').fadeIn();

        //X Button
        $('#lightbox').find(".closebtn").on('click', function() {
          $('#lightbox').fadeOut();
        });
      }

      //#lightbox does not exist - create and insert (runs 1st time only)
      else {

        var lightbox = htmlInject(image, title, subtitle, text, appstore, googleplay, inStore);

        //insert lightbox HTML into page
        $(lightbox).hide().appendTo("body").fadeIn();

        //X Button
        $('#lightbox').find(".closebtn").on('click', function() {
          $('#lightbox').fadeOut();
        });
      }
  });
});

function htmlInject(image, title, subtitle, text, appstore, googleplay, inStore) {
  var src =
  '<div id="lightbox">' +
    '<div id=lbwrapper><span class="closebtn"><a href="javascript:void(0)">X</a></span>' +
      '<div id="content">' +
          '<div id="col1">' +
            '<img src=' + image + '>' +
          '</div>' +
          '<div id="col2">' +
            '<div id="topcol">' +
              '<h1>' + title + '</h1><br />' +
              '<p class="lbsubtitle">' + subtitle + '</p><br /><br />' +
              '<p class="lbtext">' + text + '</p>' +
            '</div>' +
            '<div id="bottomcol">';

  if (inStore) {
    src = src +
    '<div class="buttonrow">' +
      '<a href="' + appstore + '"><img src="images/appstore.png"></a>' +
    '</div>' +
    '<div class="buttonrow">' +
      '<a href="' + googleplay + '"><img src="images/googleplaysoon.png"></a>' +
    '</div>';
  }

  src = src +
            '</div>' +
          '</div>' +
      '</div>' +
    '</div>' +
  '</div>';

  return src;
}