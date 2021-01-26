import React from 'react'
import img from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/user.png'
import img1 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/bolt.png'
import img2 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/signOut.png'
import img3 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/bollt.png'
import img4 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/icon/layout.png'
import img5 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/icon/target.png'
import img6 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/icon/message-square.png'
import img7 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/icon/settings.png'
import img8 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/spotify.png'


function Dashboard() {
    return (
        <div style={{height: '800px', border: '1px solid #F5F5F5', backgroundColor:'#F5F5F5'}}>
            <div style={{float: 'right', border: '1px solid #fff', width: '', height: '25%', margin: '10px 20px', boxShadow: '4px 4px #ECECEC', backgroundColor:'#fff'}} className='dashboard'>
                <div style={{float: 'right', margin: 'auto 20px'}}>
                    <h6 style={{marginTop: '20px'}}>Barima Effah Adjei</h6>
                    <p style={{color: '#ECECEC', fontSize: '9px', marginTop: '-5px'}}><b>Account Id: Ax349Fj</b></p>
                </div>
                <div style={{border: '1px solid #7A30E3', borderRadius: '50%', backgroundColor: '#7A30E3', width: '15%', height: '17%', margin: '20px 10px'}}>
                    <h6 style={{color: '#fff', margin: '8px 5px', fontSize: '100%'}}><b>BE</b></h6>
                </div>
                <hr />
                <div style={{margin: 'auto 20px'}}>
                    <p><img src={img} style={{width: '13px', height: '13px'}}/> <span style={{margin: 'auto 5px'}}>Your account</span></p>
                    <p><img src={img1} style={{width: '13px', height: '13px'}}/> <span style={{margin: 'auto 5px'}}>Recharge account</span></p>
                </div>
                <hr style={{margin: '20px auto'}}/>
                <div style={{margin: '10px 20px'}}>
                    <p><img src={img2} style={{width: '13px', height: '13px'}}/> <span style={{margin: 'auto 5px'}}>Sign out</span></p>
                </div>
            </div>
            <div className='text-center' style={{margin: '300px 450px', float: 'right'}}>
                <h4 style={{color: '#D8D8D8'}}><b>It's quiet in here</b></h4>
                <span style={{color: '#D8D8D8', fontSize: '9px'}}>you have no data at the moment Click the button</span><br />
                <span style={{color: '#D8D8D8', fontSize: '9px'}}>below to get started with your first campaign.</span><br />
                <button style={{backgroundColor: '#30BC28', color: '#fff', border: '1px solid #76D327', marginTop: '10px', fontSize: '10px', width: '130px', height: '35px', borderRadius: '5px'}}> <b>NEW PROJECT</b> <img src={img8} style={{width: '20px', margin: 'auto 5px'}}/></button>
            </div>
            <div style={{width: '15%', height: '100%', border: '1px solid #F5F5F5', margin: '0'}}>
                <div className= 'container' style={{margin: '20px 20px'}}>
                    <div className='row'>
                        <div className= 'col-md-2' style={{border: '1px solid #FF4F65', height: '40px', backgroundColor: '#FF4F65', borderRadius: '50%', margin: '10px auto'}}>
                            <img src={img3} style={{width: '20px', marginTop: '5px', marginLeft: '-5px'}} />
                        </div>
                        <div className= 'col-md-10'>
                            <p style={{color: '#828282', fontSize: '9px', margin: '5px auto'}}>BALANCE</p>
                            <h4 style={{color: '#003152'}}>0000.00 F.CFA</h4>
                        </div>
                    </div>
                </div>
                <hr />
                <div style={{margin: '20px auto'}}>
                    <p style={{margin: '25px 35px'}}> <img src={img4} style={{width: '15px', height: '15px', marginRight: '20px'}} /> Dashboard  </p>
                    <p style={{margin: '25px 35px'}}> <img src={img5} style={{width: '15px', height: '15px', marginRight: '20px'}} /> Campaigns  </p>
                    <p style={{margin: '25px 35px'}}> <img src={img6} style={{width: '15px', height: '15px', marginRight: '20px'}} /> Broadcasts  </p>
                    <p style={{margin: '25px 35px'}}> <img src={img7} style={{width: '15px', height: '15px', marginRight: '20px'}} /> Settings </p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
