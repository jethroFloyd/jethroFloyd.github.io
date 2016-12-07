var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function animate() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('img').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

animate();

const docStyle = document.documentElement.style
const aElem = document.querySelector('a')
const boundingClientRect = aElem.getBoundingClientRect()

aElem.onmousemove = function(e) {

  const x = e.clientX - boundingClientRect.left
  const y = e.clientY - boundingClientRect.top
  
  const xc = boundingClientRect.width/2
  const yc = boundingClientRect.height/2
  
  const dx = x - xc
  const dy = y - yc
  
  docStyle.setProperty('--rx', `${ dy/-1 }deg`)
  docStyle.setProperty('--ry', `${ dx/10 }deg`)
  
}

aElem.onmouseleave = function(e) {
  
  docStyle.setProperty('--ty', '0')
  docStyle.setProperty('--rx', '0')
  docStyle.setProperty('--ry', '0')
  
}

aElem.onmousedown = function(e) {
  
  docStyle.setProperty('--tz', '-25px')
  
}

document.body.onmouseup = function(e) {
  
  docStyle.setProperty('--tz', '-12px')
  
}