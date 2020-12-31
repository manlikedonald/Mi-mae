import React from 'react'
import img from '/Users/donald/Documents/Codes/mimae/src/assets/images/signup/google.png'
import img1 from '/Users/donald/Documents/Codes/mimae/src/assets/images/signup/twitter.png'
import img2 from '/Users/donald/Documents/Codes/mimae/src/assets/images/signup/facebook.png'
import img3 from '/Users/donald/Documents/Codes/mimae/src/assets/images/signup/mimae.png'


function Signup() {
    return (
        <div>
            <div style={{border: '1px solid #fff', height: '150px'}} id='signup'>
                <h2 className='text-center' style={{marginTop: '70px', color: '#7A30E3'}}> <img src={img3} alt='Mimae Logo' width= '35px' height= '35px' /> <b>mimae</b> </h2>
            </div>
            <div style= {{border: '1px solid #ECECEC', height: '490px', margin: 'auto 25%'}}>
                <p className='text-center' style={{marginTop: '20px', fontSize: '17px'}}> Sign up for an account </p>
                <div className='container' style={{margin: 'auto 140px'}}> 
                    <div className='row'>
                    <div className= 'col-md-4'>
                        <input type='text'  className= 'signUpInput' placeholder= 'First Name'  style={{marginLeft: '-100px'}}/>
                    </div>
                    <div className= 'col-md-4'>
                            <input type='text' className= 'signUpInput' placeholder= 'Last Name'/>
                    </div>
                    </div>
                </div>
                <div className='container'>
                    <div className= 'row'>
                        <div className='col-md-12'>
                            <input type='email' placeholder='Email' style={{border: '1px solid #ECECEC'}} className='emailInput'/>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className= 'row'>
                        <div className='col-md-12'>
                            <input type='text' placeholder='Phone Number' style={{border: '1px solid #ECECEC'}} className='emailInput'/>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className= 'row'>
                        <div className='col-md-12'>
                            <input type='password' placeholder='Password' style={{border: '1px solid #ECECEC'}} className='emailInput'/>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className= 'row'>
                        <div className='col-md-12'>
                            <input type='text' placeholder='Location' style={{border: '1px solid #ECECEC'}} className='emailInput'/>
                        </div>
                    </div>
                </div>
                <button 
                    className='text-center' 
                    style={{backgroundColor: '#7A30E3', color: '#fff', border: '1px solid #7A30E3', width: '730px', cursor: 'pointer', height: '40px', margin: '10px 55px'}}> 
                    <b>SIGN UP </b>
                </button>
                <p className='text-center'>Already have an account? <span style={{color: '#7A30E3'}}><b>Log In</b></span></p>
                <hr />
                <p className='text-center'>By clicking on Sign up, you agree to our <span style={{color: '#7A30E3'}}><b>terms & conditions </b></span>and <span style={{color: '#7A30E3'}}><b>privacy policy</b></span></p>
                <div className='comtainer'>
                    <div className='row text-center' style={{margin: '35px auto'}}>
                        <div className='col-md-4'>
                            <button type= 'button' style={{color: '#fff', width: '200px',height: '40px', backgroundColor: '#FF4F65', border: '1px solid #FF4F65', borderRadius: '5px'}}>
                                <img src= {img} width='15px' height='10px'/> <span style={{marginLeft: '5px'}}>Sign in with Google </span>
                            </button>
                        </div>
                        <div className='col-md-4'>
                            <button type= 'button' style={{color: '#fff', width: '200px',height: '40px', backgroundColor: '#13C3FF', border: '1px solid #13C3FF', borderRadius: '5px'}}>
                                <img src= {img1} width='15px' height='10px'/> <span style={{marginLeft: '5px'}}>Sign in with twitter </span>
                            </button>
                        </div>
                        <div className='col-md-4'>
                            <button type= 'button' style={{color: '#fff', width: '200px',height: '40px', backgroundColor: '#0067F5', border: '1px solid #0067F5', borderRadius: '5px'}}>
                                <img src= {img2} width='5px' height='10px'/> <span style={{marginLeft: '5px'}}>Sign in with Facebook </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
