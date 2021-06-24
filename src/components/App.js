import React from 'react';
// import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import Pics from './Pics'
import axios from 'axios';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    axios.defaults.baseURL = 'https://api.unsplash.com/';
    const response = await axios.get('/search/photos/?client_id=2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296&query='+term)
    console.log(response)
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <Pics images={this.state.images}/>
      </div>
    );
  }
}

export default App;
