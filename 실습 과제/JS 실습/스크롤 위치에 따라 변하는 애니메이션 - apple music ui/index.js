$(window).scroll(function () {
  let 높이 = $(window).scrollTop();
  console.log(높이)

  // 초기식 : x = a * 높이 + b
  let y__1 = (-1/500) * 높이 + (115/50);
  let z__1 = (-1/5000) * 높이 + 565/500;

  let style__1 = {
    'opacity': `${y__1}`,
    'transform': `scale(${z__1})`,
    'transition' : 'all 0.2s'
  };

  let y__2 = (-1/530) * 높이 + (193/53);
  let z__2 = (-1/5300) * 높이 + 67/53;

  let style__2 = {
    'opacity': `${y__2}`,
    'transform': `scale(${z__2})`,
    'transition' : 'all 0.2s'
  };
  
    $('.card-box').eq(0).css(style__1);
    $('.card-box').eq(1).css(style__2);

});