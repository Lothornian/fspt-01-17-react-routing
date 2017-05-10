import React, { Component } from 'react';


export default class Away extends Component {

  render() {
    return (
      <div>
        <h1>Away</h1>
        <p>Did you mean to go <a href='/'>Home</a>?</p>
        <p>Or to the <a href='/NotFound'>Not found page</a>?</p>
        <p>Or maybe you want to go <a href='/away'>away</a>?</p>
      </div>
    )
  }
}
