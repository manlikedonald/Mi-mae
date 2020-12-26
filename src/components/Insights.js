import React from 'react'
import img from '../assets/images/insight.png'
import img1 from '../assets/images/insights.png'

function Insights() {
    return (
        <div style={{height: '550px', border: '1px solid #fff'}} className='insights'>
            <div className='container insight'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h2 style={{color: '#003152'}}>Agencies engage better</h2>
                        <h2><span style={{color: '#003152'}}>with our </span><span style= {{color: '#7A30E3'}}>Insights &  </span></h2>
                        <h2><span style= {{color: '#7A30E3'}}>Reports </span></h2>
                        <p style={{color: '#003152'}}>Depending on your budget, we offer you the largest possible exposure for your advertising</p>
                        <br />
                        <button style={{color: '#fff', backgroundColor: '#77D426', border: '1px solid #77D426', height: '40px', width: '150px',borderRadius: '5px'}}>GET STARTED {' '}  {' '}>> </button>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-6 insightIcons'>
                        <img src={img} height='300px' style={{marginTop: '-50px'}} className='insightImages'/>
                        <img src={img1} height='300px' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insights
