import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { HomePage } from './Home';
import Writers from './Writers';
import { PageNotFound } from './Errors';

class App extends Component {
  state = {
    writers: []
  }

  async componentDidMount() {
    const writers = await(await fetch('http://localhost:3004/writers')).json();
    this.setState({ writers });
  }

  render() {
console.error('App');
console.log('this.state: ',this.state);    
    const writers = this.state.writers;
    
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
            <li>
              <Link to="/errors">Errors</Link>
            </li>  
          </ul>
          <hr/>
          <Route exact path="/" component={HomePage} />
          <Route 
            path="/writers" 
            render={ (props) => <Writers {...props} writers={writers} /> } 
          />
          <Route path="/errors" render={ () => <PageNotFound/> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
