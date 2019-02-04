import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { HomePage } from './Home';
import { Writers } from './Writers';
import { PageNotFound } from './Errors';

class App extends Component {
  state = {
    writers: []
  }

  async componentDidMount() {
    const writers = await(await fetch('http://localhost:3020/writers?_embed=texts')).json();
    this.setState({ writers });
  }

  render() {
console.error('src/Components/App.js');
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
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route 
              path="/writers" 
              render={ (props) => <Writers {...props} writers={writers} /> } 
            />
            
            <Route  render={ (props) => { return <PageNotFound {...props} urlTyped={props.location.pathname}/> } }/>
            
          </Switch>  
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

 //<Route render={ () => { return <Redirect to="/404"/> } }/>
 //<Route path="/404" component={PageNotFound}/>