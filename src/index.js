import React from 'react';
import ReactDOM from 'react-dom';

// create a new component that produces html
const App = function(){
  return <div>Hi</div>;
}


// get generated html from component, and inject it into DOM
ReactDOM.render(App);
