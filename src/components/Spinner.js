import React, { Component } from 'react'
import loading from './Ajax-loader.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div style={{margin: "20px"}}className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
