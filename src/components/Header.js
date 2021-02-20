import './all.css'
import React from 'react';
import {Button} from 'react-bootstrap';
import homeIcon from '../img/home.png';
import blogIcon from '../img/blog.png';
import downIcon from '../img/down.png';

function redirect(link){
  window.location=link;
}

const Header = class extends React.Component {
  render() {
    return (
      <div className="dark-background">
        <div className="collapse" id="header-collapsible">
          <header className="header">        
            <Button className="btn btn-outline-secondary" onClick={() => redirect("/")}><img src={homeIcon} alt="my play store apps" /><p className="Default-font">Home</p></Button>
            <Button className="btn btn-outline-secondary" onClick={() => redirect("/blog")}><img src={blogIcon} alt="my blog" /><p className="Default-font">Blog</p></Button>
          </header>
        </div>
        <button className="btn btn-outline-secondary" type="button" data-toggle="collapse" data-target="#header-collapsible" aria-expanded="false" aria-controls="header-collapsible">
          <img src={downIcon} alt="open top menu" />
        </button>
      </div>
    )
  }
}

export default Header
