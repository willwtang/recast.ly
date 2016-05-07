class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: null,
      video: null
    };
  }

  componentDidMount() {
    this.props.searchYouTube({
      query: 'puppies',
      max: 5, 
      key: window.YOUTUBE_API_KEY,
    }, this.updatePlayer.bind(this));
  }

  updatePlayer(data) {
    console.log(this);
    console.log(data);
    this.setState({
      videos: data,
      video: data[0]
    });
  }

  onVideoClick(video) {
    this.setState({
      video: video
    });
  }

  render() {
    if (this.state.videos && this.state.video) {
      return (
        <div>
          <Nav />
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList callback={this.onVideoClick.bind(this)} videos={this.state.videos} />
          </div>
        </div>
      );
    } else {
      return (
        <div class="loading">Loading...</div>
      );
    }
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
