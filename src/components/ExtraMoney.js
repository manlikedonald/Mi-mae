import React from 'react'
import img from '../assets/images/iPhone.png'
import img1 from '../assets/images/AppleStore.png'
import img2 from '../assets/images/GooglePlay.png'

function ExtraMoney() {
    return (
        <div style={{backgroundColor: '#FAFBFC', border: '1px solid #FAFBFC', height: '380px'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={img} width='630px' height= '700px' style={{marginTop: '-120px', marginLeft: '-100px'}} className='iPhone'/>
                    </div>
                    <div className='col-md-6' style={{marginTop: '150px'}}>
                        <h2 style={{color: '#003152'}}>Make some <span style={{color:'#7A30E3', textDecoration: 'underline'}}>extra money.</span> </h2>
                        <h2 style={{color: '#003152'}}>Become a broadcaster</h2>
                        <p style={{color: '#003152'}}>Download our mobile app and make money today</p>
                        <span>
                            <a href='#'><img src={img1} width='100px' height='30px'/></a>
                            <a href='#'><img src={img2} width='100px' height='30px'/></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtraMoney
