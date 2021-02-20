//TODO: change css
import './all.css';

import React from 'react';
import {Button} from 'react-bootstrap';

import githubIcon from '../img/github.svg';
import linkedinIcon from '../img/linkedin.svg';
import discordIcon from '../img/discord.svg';
import gmailIcon from '../img/gmail.svg';
import googlePlayIcon from '../img/google-play.svg';
import blogIcon from '../img/blog.png';

function redirect(link){
  window.open(link);
}

function SocialsLinks(){
  return (
    <div className='center'>
      <Button className="btn btn-outline-secondary" onClick={() => redirect("https://github.com/BryanIsAProfessional")}><img src={githubIcon} alt="my github" /><p className="Default-font">GitHub</p></Button>
      <Button className="btn btn-outline-secondary" onClick={() => redirect("https://www.linkedin.com/in/bryanisaprofessional")}><img src={linkedinIcon} alt="my linkedin" /><p className="Default-font">LinkedIn</p></Button>
      <Button className="btn btn-outline-secondary" onClick={() => redirect("https://discordapp.com/users/Iteration#3517/")}><img src={discordIcon} alt="find me on discord" /><p className="Default-font">Discord</p></Button>
      <Button className="btn btn-outline-secondary" onClick={() => redirect("mailto:bryanisaprofessional@gmail.com")}><img src={gmailIcon} alt="email me" /><p className="Default-font">Email Me</p></Button>
      <Button className="btn btn-outline-secondary" onClick={() => redirect("https://play.google.com/store/apps/developer?id=Bryan+is+a+professional")}><img src={googlePlayIcon} alt="my play store apps" /><p className="Default-font">My Apps</p></Button>
      <Button className="btn btn-outline-secondary" onClick={() => redirect("/blog")}><img src={blogIcon} alt="my blog" /><p className="Default-font">Blog</p></Button>
    </div>
  );
}

export default SocialsLinks;
