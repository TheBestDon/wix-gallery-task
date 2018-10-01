window.MODULES.static = function(query) {
  const pictures = window.DATA.staticImagesDb;
  const images = [];

  // Make new array with pictures that contain query
  const filteredPictures = pictures.filter(picture => {
    return picture.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });

  // Construct right format for return
  filteredPictures.forEach(picture => {
    return images.push({
      id: picture.id,
      url: picture.url,
      title: picture.title
    });
  });
  return images;
};
