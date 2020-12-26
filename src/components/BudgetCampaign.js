import React from 'react'
import img from '../assets/images/logo2.svg'
import img1 from '../assets/images/logo3.svg'
import img2 from '../assets/images/logo4.svg'

function BudgetCampaign() {
    return (
        <div style= {{marginTop: '250px', height: '350px'}}>
            <div className='container'>
                <div className='row'>
                    <div className= 'col-md-4'> 
                        <div className='BudgetImage'>
                            <img src={img} style={{margin: '7px 6px'}}/> 
                        </div>
                            <br />
                            <h3 style={{color: '#003152'}}>Budget efficient</h3>
                            <h3 style={{color: '#003152'}}>campaigns</h3>
                            <p style={{color: '#D8D8D8'}}>SmartPub is cheap. The advertiser only pays </p>
                            <p style={{color: '#D8D8D8'}}>when a potential customer shows interest in the</p>
                            <p style={{color: '#D8D8D8'}}>broadcasted content.</p>
                    </div>
                    <div className= 'col-md-4'> 
                        <div className='BudgetImage'>
                            <img src={img1} style={{margin: '10px 5px'}}/> 
                        </div>
                            <br />
                            <h3 style={{color: '#003152'}}>Realtime and visual</h3>
                            <h3 style={{color: '#003152'}}>analytics</h3>
                            <p style={{color: '#D8D8D8'}}>SmartPub is cheap. The advertiser only pays </p>
                            <p style={{color: '#D8D8D8'}}>when a potential customer shows interest in the</p>
                            <p style={{color: '#D8D8D8'}}>broadcasted content.</p>
                    </div>
                    <div className= 'col-md-4'> 
                        <div className='BudgetImage'>
                            <img src={img2} style={{margin: '8px 9px'}}/> 
                        </div>
                            <br />
                            <h3 style={{color: '#003152'}}>Global broadcast</h3>
                            <h3 style={{color: '#003152'}}>network</h3>
                            <p style={{color: '#D8D8D8'}}>SmartPub is cheap. The advertiser only pays </p>
                            <p style={{color: '#D8D8D8'}}>when a potential customer shows interest in the</p>
                            <p style={{color: '#D8D8D8'}}>broadcasted content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BudgetCampaign
