import React from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

import './App.css';


class App extends React.Component {
  state = {
    searchName: ""
  };  
  searchForm = (searchName) => {
    // console.log(searchName);   
    this.setState({ searchName });    
  }

  
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.searchForm} />
        <ImageGallery searchName={this.state.searchName}/>
      </div>
    )
  }
};
export default App;
