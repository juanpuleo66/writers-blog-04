import React, { Component } from 'react';

class App extends Component {
  state = {
    writers: []
  }

  async componentDidMount() {
    const writers = await(await fetch('http://localhost:3004/writers')).json();
    this.setState({ writers });
  }

  render() {
console.log('this.state: ',this.state);
    return (
      <div>
      </div>
    );
  }
}

export default App;
