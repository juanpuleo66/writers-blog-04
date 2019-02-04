import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { Text } from './Text';
import { PageNotFound } from '../../Errors'

class Writer extends Component {
  render() {
console.error('src/Components/Writers/Writer/writer.js');
console.log('this.props: ',this.props);  
    const { id, name, born, deceased, description, image, texts, match: {url} } = this.props;
console.log('url: ',url);  

    return (
      <div>
        <h3 style={{marginBottom:"0"}}>{name}<span>{id}</span></h3>
        <span style={{display:"block", fontWeight:"bold", fontSize:"14px", marginBottom:"1rem" }}>{born} &mdash; {deceased}</span> 
        <div 
          style={{display:"flex", justifyContent:"flex-end", alignItems:"flex-start"}}
        > 
          <img 
            src={image} 
            alt={name} 
            style={{
              display:"block",
              width:"250px", 
              maxHeight:"200px", 
              border:"2px solid rgba(100,100,100,0.5)"
            }}
          />
          <p style={{marginTop: "0", padding:"0 1rem", textAlign:"justify", textJustify:"inter-word"}}>
            {description}
          </p>
        </div>  
        <ul>
            {texts.map( ({ id, title }) => 
              <li key={id}>
                <Link to={`${url}/text/${id}`}>
                  {title}
                </Link>  
              </li>
            )}
        </ul>

        <Route 
          path={`${url}/text/:textId`} 
          render={ (props) => {
            const text = texts.find( text => text.id === props.match.params.textId);

            if ( !text ) {
              return <PageNotFound urlTyped={props.match.url}/>
            } 
            return <Text {...text} />
          }}
          
        />
      </div>  
    )
  }
}

export default Writer;