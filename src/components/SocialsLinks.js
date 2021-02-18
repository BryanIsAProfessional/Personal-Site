//TODO: change css
import './all.sass';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

import githubIcon from '../img/github.svg';
import linkedinIcon from '../img/linkedin.svg';
import discordIcon from '../img/discord.svg';
import gmailIcon from '../img/gmail.svg';
import googlePlayIcon from '../img/google-play.svg';

function redirect(link){
  window.open(link);
}

function SocialsLinks(){
  return (
    <div>
      <Button class="btn btn-outline-secondary" onClick={() => redirect("https://github.com/BryanIsAProfessional")}><img src={githubIcon} alt="my github" /><p>GitHub</p></Button>
      <Button class="btn btn-outline-secondary" onClick={() => redirect("https://www.linkedin.com/in/bryanisaprofessional")}><img src={linkedinIcon} alt="my linkedin" /><p>LinkedIn</p></Button>
      <Button class="btn btn-outline-secondary" onClick={() => redirect("https://discordapp.com/users/Iteration#3517/")}><img src={discordIcon} alt="find me on discord" /><p>Discord</p></Button>
      <Button class="btn btn-outline-secondary" onClick={() => redirect("mailto:bryanisaprofessional@gmail.com")}><img src={gmailIcon} alt="email me" /><p>Email Me</p></Button>
      <Button class="btn btn-outline-secondary" onClick={() => redirect("https://play.google.com/store/apps/developer?id=Bryan+is+a+professional")}><img src={googlePlayIcon} alt="my play store apps" /><p>My Apps</p></Button>
    </div>
  );
}

export default SocialsLinks;
