// Home.jsx
import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Menu from '../../Glav/Menu';



export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Menu/>
      </div>
    );
  }
}
