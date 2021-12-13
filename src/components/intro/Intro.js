import React from 'react'
import "./intro.css"
// import fumbi from '../../images/fumbi.png'

const Intro = () => {
    return (
        <div className='i'>
            
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'> Hello, My name is</h2>
                    <h1 className='i-name'> Oyelusi Oluwafunmibi Adesola</h1>
                    <div className='i-tittle'>
                        <div className='i-tittle-wrapper'>
                            <div className='i-tittle-item'> Front-End Developer</div>
                            <div className='i-tittle-item'> Front-End Developer</div>
                            <div className='i-tittle-item'> Front-End Developer</div>
                            <div className='i-tittle-item'> Front-End Developer</div>
                            <div className='i-tittle-item'> Front-End Developer</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                        I have experience efficiently designing responsive websites and applications using modern technologies for Front-End development (HTML, CSS, JavaScript, React.js).
                    </p>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'> </div>
                {/* <img src={fumbi} alt='' className='i-img'></img> */}
            </div>
        </div>
    )
}

export default Intro
