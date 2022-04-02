import React, { Component } from 'react';
import { showFooter } from '../ProfileInformation'
import '../App.css';

class FooterSection extends Component {
  render() {
    if(showFooter){
      return (
        <div className="FooterSection">
          <h3></h3>
        </div>
      );
    }
    else
    {
      return null;
    }
  }
}

export default FooterSection;
