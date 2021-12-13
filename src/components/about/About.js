import React from 'react'
import './About.css'
import funbi from '../../images/funbi.png'
import stutern from '../../images/stutern.jpg'

const About = () => {
    return (
        <div className ='a'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src={funbi} alt='' className='a-img' />
                </div>  
            </div> 
            <div className='a-right'>
                <h1 className='a-tittle'>About Me</h1>
                <h2 className='a-sub'> A good developer isn't born, but rather made through constant Practice.</h2>
                <p className='a-desc'>I'm a graduate of the Federal University of Agriculture Abeokuta. (FUNAAB). I Studied Agricultural and Bio-resources Engineering. I'm a passionate Tech-Enthusiast, specialized in Front-End development. I started my Tech journey self-learning python for data science on Coursera, but I realized I was more passionate about building beautiful and interactive websites and applications. I'm currently undergoing training as a Front-End developer at Stutern.</p>
                <div className='a-stutern'>
                    <img src={stutern} alt='' className='a-stutern-img'/>
                    <div className='a-stutern-text'>
                        <h4 className='a-stutern-title' > Stutern Graduate Accelerator Program, 2021.</h4>
                        <p className='a-stutern-desc' > Front-End Web Development.</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default About
