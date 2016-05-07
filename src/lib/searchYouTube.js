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
    success: callback
  });
};

window.searchYouTube = searchYouTube;
