function random(min, max) {
  return Math.floor(Math.random() * (max) + min);
}
(function() {
  var tl = new TimelineMax();
  for (var i = 0; i < 5; i++) {
    var t = TweenMax.to(document.getElementById('blob' + i), random(18, 55), {
      y: 250,
      repeat: -1,
      yoyo: true
    })
    tl.add(t, (i + 1))
  }
  tl.seek(100);
  tl.timeScale(2);
})();