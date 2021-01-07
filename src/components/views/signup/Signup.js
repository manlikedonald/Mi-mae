import React from 'react'
import img from '/Users/donald/Documents/Codes/mimae/src/assets/images/signup/google.png'
import img1 from '/Users/donald/Documents/Codes/mimae/src/assets/images/signup/twitter.png'
import img2 from '/Users/donald/Documents/Codes/mimae/src/assets/images/signup/facebook.png'
import img3 from '/Users/donald/Documents/Codes/mimae/src/assets/images/signup/mimae.png'


function Signup() {
    return (
        <div style={{color: '#003152'}}>
            <div style={{border: '1px solid #fff', height: '150px'}} id='signup'>
                <h2 className='text-center' style={{marginTop: '70px', color: '#7A30E3'}}> <img src={img3} alt='Mimae Logo' width= '35px' height= '35px' /> <b>mimae</b> </h2>
            </div>
            <div style= {{border: '1px solid #ECECEC', height: '490px', margin: 'auto 30%'}}>
                <p className='text-center' style={{marginTop: '20px', fontSize: '17px'}}> Sign up for an account </p>
                <div style={{margin: '10px 9%'}}> 
                    <input type='text'  className= 'signUpInput' placeholder= 'First Name' style={{marginLeft: '4px'}}/>
                    <input type='text' className= 'signUpInput' placeholder= 'Last Name' style={{marginLeft: '4px'}}/>
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
                <button className= 'signUpButton'> <b>SIGN UP </b> </button>
                <p className='text-center'>Already have an account? <a href='#' style={{color: '#7A30E3'}}><b>Log In</b></a></p>
                <hr />
                <p className='text-center'>By clicking on Sign up, you agree to our <a href='#' style={{color: '#7A30E3'}}><b>terms & conditions </b></a>and <a href='#' style={{color: '#7A30E3'}}><b>privacy policy</b></a></p>
                <div className='container'>
                    <div className='row text-center signUpSocialMediaButton' style={{margin: '35px auto'}}>
                        <div className='col-md-4'>
                            <button type= 'button' style={{color: '#fff', width: '100%',height: '40px', backgroundColor: '#FF4F65', border: '1px solid #FF4F65', borderRadius: '5px'}}>
                                <img src= {img} width='19px' height='14px'/> <span style={{margin: 'auto 2px'}}>Sign in with Google </span>
                            </button>
                        </div>
                        <div className='col-md-4'>
                            <button type= 'button' style={{color: '#fff', width: '100%',height: '40px', backgroundColor: '#13C3FF', border: '1px solid #13C3FF', borderRadius: '5px'}}>
                                <img src= {img1} width='19px' height='14px'/> <span style={{margin: 'auto 2px'}}>Sign in with twitter </span>
                            </button>
                        </div>
                        <div className='col-md-4'>
                            <button type= 'button' style={{color: '#fff', width: '100%',height: '40px', backgroundColor: '#0067F5', border: '1px solid #0067F5', borderRadius: '5px'}}>
                                <img src= {img2} width='7px' height='14px'/> <span style={{margin: 'auto 2px'}}>Sign in with Facebook </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
