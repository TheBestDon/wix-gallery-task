(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  ImageFinder.prototype.search = async function(query, moduleId) {
    try {
      switch (moduleId) {
        case 'static':
          return { query, images: window.MODULES.static(query) };

        case 'flickr':
          return { query, images: await window.MODULES.flickr(query) };

        default:
          throw Error('Module not found');
      }
    } catch (error) {
      throw Error('Error ooccurred');
    }
  };
})();
