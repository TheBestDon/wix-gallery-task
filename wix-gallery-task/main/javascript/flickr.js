window.MODULES.flickr = async function(query) {
  try {
    const opts = {
      api_key: 'b394136d5dde8d9d0d4f8fc6685386e2'
    };

    // Make API call
    const photos = await window.fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
        opts.api_key
      }&text=${query}&format=json&nojsoncallback=1
      `
    );

    // Format to JSON
    const data = await photos.json();
    // Get photos from JSON
    const pictures = data.photos.photo;
    const images = [];

    // Construct URL and right object format for return
    pictures.forEach(picture => {
      return images.push({
        id: picture.id,
        url: `https://farm${picture.farm}.staticflickr.com/${picture.server}/${
          picture.id
        }_${picture.secret}_s.jpg`,
        title: picture.title
      });
    });
    return images;
  } catch (error) {
    throw error;
  }
};
