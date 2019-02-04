import React, { Component } from 'react';

class PageNotFound extends Component {
  render() {
console.error('src/Components/Errors/page404.js');  
console.log('this.props: ',this.props);  
    return (
      <div style={{fontSize:"0.785rem", fontWeight:"bold"}}>
        <span style={{color:"red"}}> Error 404 - page not found: <span style={{color:"black"}}>{this.props.urlTyped}</span></span>
      </div>  
    )
  }
}

export default PageNotFound
