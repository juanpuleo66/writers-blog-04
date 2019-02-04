import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import { Writer } from './Writer';
import { PageNotFound } from '../Errors'

class Writers extends Component {
  render() {
console.error('src/Components/Writers/writers.js');
console.log('this.props: ',this.props);    
    const { writers } = this.props;
    const { url } = this.props.match;  

    return (
      <div>
        <h3>Pagina Writers</h3>
        <ul>
          {writers.map( ({id, name}) => 
            <li key={id}>
              <Link to={`${url}/${id}`}>{name}</Link>
            </li>  
          )}    
        </ul>  
        <Route exact path={url} render={() => <h4>Please select a writer</h4>}/>
        <Route 
          path={`${url}/:writersId`}
          render={ (props) => {
            const writer = writers.find( writer => writer.id === props.match.params.writersId );

            if ( !writer ) {
              //return <Redirect to="/404" /> --> redirecciona la url y se va al componente 404 que esta en la raiz App.js
              return <PageNotFound urlTyped={props.match.url}/> // --> se queda en este componente y muestra el componente PageNotFound
            }

            return <Writer {...props} {...writer}/>
          }}
        />
      </div>
    )
  }
}

export default Writers;
