import React from 'react'
import img from '../assets/images/logo.svg'

function AdCampaign() {
    return (
        <div style= {{backgroundColor: '#7A30E3', color: '#fff', height: '550px'}}>
            <div className='container'>
                <div className= 'row'>
                    <div className= 'col-md-4'>
                        <h1>Smart Advertising</h1>
                        <h1>Campaigns</h1>
                        <br />
                        <span>Depending on your budget, we offer you the largest</span>
                        <p>possible exposure for your advertising</p>
                        <br />
                        <button style={{color: '#fff', backgroundColor: '#76D327', border: '1px solid #76D327', height: '35px', width: '140px', fontSize: '10px', borderRadius: '5px'}}>GET STARTED >> </button>
                    </div>
                    <div className= 'col-md-8'>
                        <img src={img} className='AdImage' width='1000px' style={{marginTop: '-40px', position: 'relative'}} alt='Mi-mae stats'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdCampaign
