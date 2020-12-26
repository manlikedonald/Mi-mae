import React from 'react'
import img from '../assets/images/howitworks@2x.svg'
import img1 from '../assets/images/check.png'

function EasySteps() {
    return (
       <div style={{backgroundColor: '#FAFBFC', border: '1px solid #FAFBFC', height: '600px'}} className='easySteps'>
            <div className='text-center' style={{margin: '50px auto'}}>
                    <p style={{color: '#D8D8D8'}}>HOW IT WORKS</p>
                    <h1 style={{color: '#003152'}}>Get started in 3 easy steps</h1>
            </div> 
            <div className='container' style={{margin: '50px auto'}}>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={img} alt='How it works' height='500px' className='easyImage'/>
                    </div>
                    <div className='col-md-6'>
                        <div className='checkIcon'><img src={img1} alt='check' style={{margin: '9px 7px'}}/></div>
                        <h4 style={{color: '#003152', marginLeft: '50px', marginTop: '-30px'}}>Create Account</h4>
                        <p style={{color: '#D8D8D8', marginLeft: '50px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='checkIcon'><img src={img1} alt='check' style={{margin: '9px 7px'}}/></div>
                        <h4 style={{color: '#003152', marginLeft: '50px', marginTop: '-30px'}}>Add Funds via mobile money, visa etc.</h4>
                        <p style={{color: '#D8D8D8', marginLeft: '50px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a.</p>
                        <div className='checkIcon'><img src={img1} alt='check' style={{margin: '9px 7px'}}/></div>
                        <h4 style={{color: '#003152', marginLeft: '50px', marginTop: '-30px'}}>Start Creating Campaigns</h4>
                        <p style={{color: '#D8D8D8', marginLeft: '50px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                </div>
            </div>
       </div>
    )
}

export default EasySteps
