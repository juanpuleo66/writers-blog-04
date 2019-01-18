import React, { Component } from 'react';
import Link from 'react-router-dom';

class Writers extends Component {
  render() {
console.error('writers');    
console.log('this.props: ',this.props);
    const { writers } = this.props;

    return(
      <div>
        <h3>Pagina Writers</h3>
        <ul>
          {writers.map( (writer) => 
            <li key={writer.id}>
              {writer.name}
            </li>  
          )}
        </ul>
      </div>
    )
  }
}

export default Writers;
