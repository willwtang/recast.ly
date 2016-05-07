var searchYouTube = (options, callback) => {

  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      videoEmbeddable: true,
      type: 'video'
    },
    success: (data) => callback(data.items)
  });
};

window.searchYouTube = searchYouTube;
