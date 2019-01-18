import React, { Component } from 'react';

class HomePage extends Component {
  render() {
console.error('homepage');
console.log('this.props: ',this.props);    
    return(
      <h3>Home Page</h3>
    )
  }
}

export default HomePage;