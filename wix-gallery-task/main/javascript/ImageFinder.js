(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  ImageFinder.prototype.search = function(query) {
    return window.MODULES.static(query);
  };
})();
