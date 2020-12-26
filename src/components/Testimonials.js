import React from 'react'
import img from '../assets/images/lady.png'
import img1 from '../assets/images/chevron-left.png'
import img2 from '../assets/images/chevron-right.png'

function Testimonials() {
    return (
        <div style={{backgroundColor: '#7A30E3', height: '550px', border: '1px #7A30E3 solid'}} className='testimonial'>
            <div className='text-center testimonials'>
                <p style={{color: '#fff'}}>TESTIMONIALS</p>
                <h3 style={{color: '#fff'}}>What our customers say about us</h3>
                <br />
                <br />
                <br />
                <br />
                <img src={img} alt='lady' width='90px' height='90px'/>
            </div>
            <br />
            <br />
            <br />
            <div className='text-center container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <img src={img1} style={{marginTop: '20px'}}/>
                    </div>
                    <div className='col-sm-4'>
                        <p style={{color: '#fff'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <br />
                        <p className='text-center'  style={{color: '#fff'}}><b>Barima Effah</b></p>
                    </div>
                    <div className='col-sm-4'>
                        <img src={img2} style={{marginTop: '20px'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
