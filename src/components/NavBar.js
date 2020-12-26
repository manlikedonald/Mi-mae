import React from 'react'
import img from '../assets/images/logo1.svg'

function NavBar() {
    return (
        <div style= {{backgroundColor: '#7A30E3', color: '#fff', height: '300px', position: 'relative', display: 'block'}} className='navBarPara'>
            <div className='container'>
                <div className="row navRow">
                    <div className='col-md-6'>
                        <img src={img} className= 'navBarImage' style={{margin: '40px auto', width: '140px'}} alt='Mi-mae Logo'/>
                    </div>
                    <div className='col-md-6' style={{margin: '50px auto'}}>
                        <span><a href='#'>Home</a></span>
                        <span style={{marginLeft: '50px'}}><a href='#'>How It Works</a></span>
                        <span style={{marginLeft: '50px'}}><a href='#'>Log In</a></span>
                        <span style={{marginLeft: '50px'}}><button style= {{backgroundColor: '#76D327', outline: 'none', color: '#fff', border: '#76D327', width: '80px', height: '30px', cursor: 'pointer', borderRadius: '5px'}}>Sign up</button></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
