var searchYouTube = (options, callback) => {
  // TODO
  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet'
    },
    success: (data) => callback(data.items)
  });
};

window.searchYouTube = searchYouTube;
