import React from 'react'
import img from '/Users/donald/Documents/Codes/mimae/src/assets/images/login/mimae.png'


function Login() {
    return (
        <div>
             <div style={{border: '1px solid #fff', height: '150px'}} id='login'>
                <div style={{marginTop: '150px'}}>
                    <h2 className='text-center' style={{marginTop: '70px', color: '#7A30E3'}}> <img src={img} alt='Mimae Logo' width= '35px' height= '35px' /> <b>mimae</b> </h2>
                </div>
            </div>
            <div style= {{border: '1px solid #ECECEC', height: '360px', margin: '50px 35%'}}>
                <p className='text-center' style={{margin: '20px auto', fontSize: '17px'}}>Login</p>
                <input type='text'  className= 'loginInput' placeholder= 'Email'  /> 
                <br />
                <input type='password'  className= 'loginInput' placeholder= 'Password'  /> 
                <br />
                <button style={{color: '#fff', backgroundColor: '#7A30E3', border: '1px solid #7A30E3', width: '85%', height: '40px', margin: '10px 8%'}}> <b>SIGN IN</b> </button>
                <p className='text-center' style={{margin: '20px auto'}}>Forgot your password ?<span style={{color: '#7A30E3'}}><b> Reset Password </b></span> </p>
                <hr />
                <p className='text-center' style={{margin: '20px auto'}}>Don't have an account ? Click here to <span style={{color: '#7A30E3'}}><b>get started </b></span> </p>
            </div>
        </div>
    )
}

export default Login
