(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  ImageFinder.prototype.search = async function(query, moduleId) {
    switch (moduleId) {
      case 'static':
        return window.MODULES.static(query);

      case 'flickr':
        return await window.MODULES.flickr(query);

      default:
        throw Error('Search module is not found.');
    }
  };
})();
