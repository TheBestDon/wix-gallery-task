(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  ImageFinder.prototype.search = function(query) {
    const pictures = window.DATA.staticImagesDb;
    const images = [];

    const filteredPictures = pictures.filter(picture => {
      return picture.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });

    filteredPictures.forEach(picture => {
      return images.push({
        id: picture.id,
        url: picture.url,
        title: picture.title
      });
    });
    return {
      query,
      images
    };
  };
})();
