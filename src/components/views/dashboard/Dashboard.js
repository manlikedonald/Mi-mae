import React from 'react'
import img from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/user.png'
import img1 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/bolt.png'
import img2 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/signOut.png'

function Dashboard() {
    return (
        <div style={{height: '500px', border: '1px solid #fff', backgroundColor:'#F5F5F5'}}>
            <div style={{float: 'right', border: '1px solid #fff', width: '11%', height: '40%', margin: '10px 20px', boxShadow: '4px 4px #ECECEC', backgroundColor:'#fff'}} className='dashboard'>
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
           
        </div>
    )
}

export default Dashboard
