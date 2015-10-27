(function(){

  var _x = -1,
      _y = -1,
      _lastX = -1,
      _lastY = -1;

  var reset = function() {
    _x = -1;
    _y = -1;
    _lastX = -1;
    _lastY = -1;
  };

  /////////////////////////////////////////////////////////////
  // PUBLIC
  /////////////////////////////////////////////////////////////

  var pointerPos = {};
  window.pointerPos = pointerPos;

  pointerPos.x = function(el) {
    if(el != null) {
      var offset = el.getBoundingClientRect();
      return _x - offset.left;
    }
    return _x;
  };

  pointerPos.y = function(el) {
    if(el != null) {
      var offset = el.getBoundingClientRect();
      return _y - offset.top;
    }
    return _y;
  };

  pointerPos.xPercent = function(el) {
    if(el != null) {
      var offset = el.getBoundingClientRect();
      var relativeX = _x - offset.left;
      return relativeX / offset.width;
    }
    return _x / window.innerWidth;
  };

  pointerPos.yPercent = function(el) {
    if(el != null) {
      var offset = el.getBoundingClientRect();
      var relativeY = _y - offset.top;
      return relativeY / offset.height;
    }
    return _y / window.innerHeight;
  };

  pointerPos.xDelta = function() {
    return (_lastX == -1) ? 0 : _x - _lastX;
  };

  pointerPos.yDelta = function() {
    return (_lastY == -1) ? 0 : _y - _lastY;
  };


  /////////////////////////////////////////////////////////////
  // Move listener
  /////////////////////////////////////////////////////////////

  var mouseX = 0;
  var mouseY = 0;
  function pointerMoved(x, y) {
    _lastX = _x;
    _lastY = _y;
    _x = x;
    _y = y;
  }

  document.addEventListener('mousedown', function(e) {
    pointerMoved(e.clientX, e.clientY);
  });
  document.addEventListener('mousemove', function(e) {
    pointerMoved(e.clientX, e.clientY);
  });

  document.addEventListener('touchstart', function(e) {
    pointerMoved(e.touches[0].clientX, e.touches[0].clientY);
  });
  document.addEventListener('touchmove', function(e) {
    pointerMoved(e.touches[0].clientX, e.touches[0].clientY);
  });

})();
