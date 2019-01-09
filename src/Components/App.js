import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Writers from './Writers';

class App extends Component {
  state = {
    writers: []
  }

  async componentDidMount() {
    const writers = await(await fetch('http://localhost:3004/writers')).json();
    this.setState({ writers });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/writers">Writers</Link>
            </li>
          </ul>
          <hr/>
          <Route exact path="/" render={ () => <div><h3>Home</h3></div> } />
          <Route path="/writers" render={ () => <Writers/> }/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
