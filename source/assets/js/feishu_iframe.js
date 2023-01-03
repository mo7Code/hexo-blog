$(document).ready(function () {
  var path = $("iframe[name='feishu_iframe']").attr('x-src');
  if (path) {
    $('#rightside-config-hide').addClass('show');

    $('#readmode').on('click', function (evt) {
      window.open(path);
      evt.stopPropagation();
    });

    if ($(window).width() < 768) {
      $("iframe[name='feishu_iframe']").attr('height', $(window).height());
      window.scrollTo(0, 0);
    }
    load_feishu_iframe(path);
  }
});

function load_feishu_iframe(path) {
  var feishu_if = $("iframe[name='feishu_iframe']");
  feishu_if.attr('src', path);
  feishu_if.removeAttr('x-src');
  feishu_if.on('load', function (params) {
    feishu_iframe_load_end();
  });
}

function feishu_iframe_load_end() {
  if ($(window).width() < 768) {
    $('#nav').css('right', '10px');
    window.scrollTo(0, 0);
  }

  $('#feishu_loading').addClass('mHide');
  setTimeout(function () {
    $('#feishu_loading').remove();
  }, 1000);
}
