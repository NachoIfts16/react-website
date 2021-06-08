import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='../videos/video-2.mp4' autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>¿Qué estas esperando?</p>
            <Button className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'>GET STARTED
            </Button>
            <Button className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'>TRAILER <i className='far fa-play-circle'/>
            </Button>
        </div>
    )
}

export default HeroSection;