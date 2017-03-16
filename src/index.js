import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = "AIzaSyC9t-SsA3Gw1gNJ2oJ1oLbdAMY86sBEXnE";


// create a new component that produces html
class App extends Component{
  constructor(props){
    super(props);
    this.state = {videos:[]};
    YTSearch({key: API_KEY, term:"surfboards"}, (videos) => {
      // this.setState({videos:videos});
      this.setState({videos});
    });
  }
  render(){
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


// get generated html from component, and inject it into DOM
ReactDOM.render(<App/>, document.querySelector(".container"));
