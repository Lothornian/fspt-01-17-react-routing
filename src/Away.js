import React, { Component } from 'react';


export default class Away extends Component {

  render() {
    return (
      <div>
        <h1>Away</h1>
        <p>Did you mean to go <a href='http://localhost:3000/' >Home</a>?</p>
        <p>Or to the <a href='http://localhost:3000/NotFound' >Not found page</a>?</p>
      </div>
    )
  }

}
