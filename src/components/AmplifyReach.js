import React from 'react'
import img from '../assets/images/play.png'
import img1 from '../assets/images/reference.png'
import img2 from '../assets/images/mail.png'
import img3 from '../assets/images/graph.png'
import img4 from '../assets/images/heart.png'
import img5 from '../assets/images/automatic.png'

function AmplifyReach() {
    return (
        <div style={{border: '1px solid #fff', height: '800px'}} className='amplify'>
            <div className='text-center amplifyReach'>
                <p style={{color: '#D8D8D8'}}>FEATURES</p>
                <h1 style={{color: '#003152'}}>Amplify your reach with our powerful tools</h1>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-md-4'>
                        <img src={img} alt='play' width='40px' height='40px'/>
                        <br />
                        <br />
                        <h5 style={{color: '#003152'}}>Multimedia support</h5>
                        <p style={{color: '#D8D8D8'}}>SmartPub is cheap. The advertiser only pays</p> 
                        <p style={{color: '#D8D8D8'}}>when a potential customer shows interest in the</p>
                        <p style={{color: '#D8D8D8'}}>broadcasted content.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src={img1} alt='reference' width='40px' height='40px'/>
                        <br />
                        <br />
                        <h5 style={{color: '#003152'}}>Natural Reference</h5>
                        <p style={{color: '#D8D8D8'}}>SmartPub is cheap. The advertiser only pays</p> 
                        <p style={{color: '#D8D8D8'}}>when a potential customer shows interest in the</p>
                        <p style={{color: '#D8D8D8'}}>broadcasted content.</p>                    </div>
                    <div className='col-md-4'>
                        <img src={img2} alt='mail' width='40px' height='40px'/>
                        <br />
                        <br />
                        <h5 style={{color: '#003152'}}>Multi-channel support</h5>
                        <p style={{color: '#D8D8D8'}}>SmartPub is cheap. The advertiser only pays</p> 
                        <p style={{color: '#D8D8D8'}}>when a potential customer shows interest in the</p>
                        <p style={{color: '#D8D8D8'}}>broadcasted content.</p>                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-md-4'>
                        <img src={img3} alt='graph' width='40px' height='40px'/>
                        <br />
                        <br />
                        <h5 style={{color: '#003152'}}>Analytics and Reporting tools</h5>
                        <p style={{color: '#D8D8D8'}}>SmartPub is cheap. The advertiser only pays</p> 
                        <p style={{color: '#D8D8D8'}}>when a potential customer shows interest in the</p>
                        <p style={{color: '#D8D8D8'}}>broadcasted content.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src={img4} alt='heart' width='40px' height='40px'/>
                        <br />
                        <br />
                        <h5 style={{color: '#003152'}}>Instant Reactions</h5>
                        <p style={{color: '#D8D8D8'}}>SmartPub is cheap. The advertiser only pays</p> 
                        <p style={{color: '#D8D8D8'}}>when a potential customer shows interest in the</p>
                        <p style={{color: '#D8D8D8'}}>broadcasted content.</p>                    </div>
                    <div className='col-md-4'>
                        <img src={img5} alt='auto' width='40px' height='40px'/>
                        <br />
                        <br />
                        <h5 style={{color: '#003152'}}>Automatic optimization</h5>
                        <p style={{color: '#D8D8D8'}}>SmartPub is cheap. The advertiser only pays</p> 
                        <p style={{color: '#D8D8D8'}}>when a potential customer shows interest in the</p>
                        <p style={{color: '#D8D8D8'}}>broadcasted content.</p>                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmplifyReach
