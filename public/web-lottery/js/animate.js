$(document).ready(function () {
    $("#img").click(function () {
      var img = $("img");
      img.animate({ deg: -45 },
        {
          duration: 100,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          }
        });
      img.animate({ deg: 45 },
        {
          duration: 120,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          }
        });
      img.animate({ deg: -45 },
        {
          duration: 100,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          }
        });
      img.animate({ deg: 45 },
        {
          duration: 120,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          }
        });
      img.animate({ deg: 0 },
        {
          duration: 100,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          },
          complete: function () { show(); }
        });
    });
  });
