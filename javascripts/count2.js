$(function () {
  let count = 0;
  $('.wardrobe').click(function () {
    count += 1;
    if (count == 5) {
     $(".ready").removeClass("none");
    }
  });
});
