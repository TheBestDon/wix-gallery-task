(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  ImageFinder.prototype.search = async function(query, moduleId) {
    switch (moduleId) {
      case 'static':
        return { query, images: await window.MODULES.static(query) };

      case 'flickr':
        return { query, images: await window.MODULES.flickr(query) };

      default:
        throw Error('Module not found');
    }
  };
})();
