import React from 'react'
import img from '/Users/donald/Documents/Codes/mimae/src/assets/images/login/mimae.png'


function LoginCopy() {
    return (
        <div style={{color: '#003152'}}>
            <div style={{border: '1px solid #fff', height: '150px', margin: '50px auto'}} id='login'>
                <div style={{marginTop: '150px'}}>
                    <h2 className='text-center' style={{color: '#7A30E3'}}> <img src={img} alt='Mimae Logo' width= '35px' height= '35px' /> <b>mimae</b> </h2>
                </div>
            </div>
            <div style= {{border: '1px solid #ECECEC', height: '330px', margin: '80px 35%'}} className='loginCopy'>
                <p className= 'text-center' style={{fontSize: '17px', marginTop: '35px'}}>Reset Password</p>
                <p className= 'text-center' style={{margin: 'auto 7%'}}>Please enter your email address. We will send you an email with instructions on how to reset your password </p>
                <input type='email' className='loginCopyInput' style={{margin: '30px 5%', border: '1px solid #ECECEC'}} placeholder='Email'/>
                <button style={{backgroundColor: '#7A30E3', width: '90%', height: '40px', margin: 'auto 5%', color: '#fff', border: '1px solid #7A30E3'}}><b>SUBMIT</b></button>
                <hr style={{marginTop: '30px'}}/>
                <p className= 'text-center' style={{margin: 'auto 7%'}}>Don't have an account ? Click here to <a href='#' style={{color: '#7A30E3'}}><b>get started</b></a> </p>
            </div>
        </div>
    )
}

export default LoginCopy
