$(function(){
    let count1 = 0;
    $(".swirl").click(function(){
      count1 += 90;
    $(this).css({'transform': 'rotate(' + count1 + 'deg)'});
    });
});
