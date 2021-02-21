import './all.css'
import React, { Component } from 'react'
import home_animation from '../img/home_animation';
import Lottie from 'react-lottie';
import SocialsLinks from './SocialsLinks';

export default class Splash extends Component {
  
  render(){
    console.log(this.props);
    return(
      <div>
          <p className="site-title center">
            {this.props.title}
            
          </p>
          <Lottie options=
            {
              {
                loop: true,
                autoplay: true,
                animationData: home_animation
              }
            }
            height={640}
            width={640}
            isClickToPauseDisabled={true}
          />
          <div className="text-overlay center">
        </div>
        
        <div className="center">
          <div className="bottom">
            <SocialsLinks/>
          </div>
          
        </div>
        <div className="width-60 center">
          <div>
            <p>{this.props.intro}</p>
          </div>
        </div>
        
      </div>
    )
  }
}
