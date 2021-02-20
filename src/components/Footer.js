import './all.css'
import React from 'react';
import SocialsLinks from './SocialsLinks';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <SocialsLinks/>
      </footer>
    )
  }
}

export default Footer
