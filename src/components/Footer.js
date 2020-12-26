import React from 'react'
import img from '../assets/images/mimae.png'
import img1 from '../assets/images/mi-mae.png'

function Footer() {
    return (
        <div style={{border: '1px solid #fff'}}>
            <div className='container' style={{marginTop: '60px'}}>
                <div className='row'>
                    <div className='col-md-3' style={{marginTop: '-7px'}}>
                        <img src= {img} width='30px'/>
                        <img src= {img1} width='70px' style={{marginLeft: '5px'}}/>
                        <br />
                        <br />
                        <p style={{color: '#D8D8D8', fontSize: '8px'}}>All rights reserved. Mimae is a smart and budget efficient way to reach consumers in a very competitive market</p>
                    </div>
                    <div className='col-md-3'>
                        <p style={{color: '#003152', fontSize: '10px'}}>RESOURCES</p>
                        <p style={{color: '#D8D8D8'}}>About Us</p>
                        <p style={{color: '#D8D8D8'}}>Blog</p>
                        <p style={{color: '#D8D8D8'}}>Partnerships</p>
                        <p style={{color: '#D8D8D8'}}>Careers</p>
                    </div>
                    <div className='col-md-3'>
                        <p style={{color: '#003152', fontSize: '10px'}}>HELP AND SUPPORT</p>
                        <p style={{color: '#D8D8D8'}}>Gettinng Started</p>
                        <p style={{color: '#D8D8D8'}}>Pricing</p>
                        <p style={{color: '#D8D8D8'}}>FAQs</p>
                    </div>
                    <div className='col-md-3'>
                        <p style={{color: '#003152', fontSize: '10px'}}>LEGAL</p>
                        <p style={{color: '#D8D8D8'}}>Terms and Conditions</p>
                        <p style={{color: '#D8D8D8'}}>Privacy Policy</p>
                        <p style={{color: '#D8D8D8'}}>Cookie Policy</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
