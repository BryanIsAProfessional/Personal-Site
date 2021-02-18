//TODO: change css
import React, { Component} from 'react'
import home_animation from '../img/home_animation';
import Lottie from 'react-lottie';
import Carousel from 'react-bootstrap/Carousel';
import SocialsLinks from './SocialsLinks';

export default class Splash extends Component {
  render(){
    return(
      <div>
        <Carousel>
            <Carousel.Item interval={1000}>
              <Carousel.Caption>
                <code>
                  Bryan is a professional
                </code>
              </Carousel.Caption>
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
              />
            </Carousel.Item>
          </Carousel>
          <div className="center">
            <div className="bottom">
              <SocialsLinks/>
            </div>
          </div>
          
      </div>
    )
  }
}
