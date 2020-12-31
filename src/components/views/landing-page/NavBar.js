import React from 'react'
import img from '/Users/donald/Documents/Codes/mimae/src/assets/images/landingPage/logo1.svg'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div style= {{backgroundColor: '#7A30E3', color: '#fff', height: '100px', position: 'relative', display: 'block'}} className='navBarPara'>
            <div className='container'>
                <div className="row navRow">
                    <div className='col-md-6'>
                        <img src={img} className= 'navBarImage' style={{margin: '40px auto', width: '140px'}} alt='Mi-mae Logo'/>
                    </div>
                    <div className='col-md-6' style={{margin: '50px auto'}}>
                        <Link to= '/'>
                            <span><a href='#'>Home</a></span>
                        </Link>
                        <span style={{marginLeft: '50px'}}><a href='#'>How It Works</a></span>
                        <Link to='/login'>
                            <span style={{marginLeft: '50px'}}><a href='#'>Log In</a></span>
                        </Link>
                        <Link to='/signup'>
                            <span style={{marginLeft: '50px'}}><button style= {{backgroundColor: '#76D327', outline: 'none', color: '#fff', border: '#76D327', width: '80px', height: '30px', cursor: 'pointer', borderRadius: '5px'}}>Sign up</button></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
