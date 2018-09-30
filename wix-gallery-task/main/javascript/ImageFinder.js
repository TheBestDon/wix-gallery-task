(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  ImageFinder.prototype.search = function(query, moduleId) {
    switch (moduleId) {
      case 'static':
        return window.MODULES.static(query);

      default:
        throw Error('Search module is not found.');
    }
  };
})();
