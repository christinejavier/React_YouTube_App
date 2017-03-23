import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyC9t-SsA3Gw1gNJ2oJ1oLbdAMY86sBEXnE";


// create a new component that produces html
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo: null
    };
    YTSearch({key: API_KEY, term:"surfboards"}, (videos) => {
      // this.setState({videos:videos});
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }
  render(){
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}


// get generated html from component, and inject it into DOM
ReactDOM.render(<App/>, document.querySelector(".container"));
