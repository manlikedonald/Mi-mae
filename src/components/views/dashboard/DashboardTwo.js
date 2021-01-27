import React from 'react'
import img from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/spotify.png'
import img1 from '/Users/donald/Documents/Codes/mimae/src/assets/images/landingPage/lady.png'
import img2 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/overview.png'
import img3 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/money.png'
import img4 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/icon/layout.png'
import img5 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/icon/target.png'
import img6 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/icon/message-square.png'
import img7 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/icon/settings.png'
import img8 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/campaign.png'
import img9 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/launch.png'
import img0 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/studio.png'
import img01 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/trophy.png'
import img02 from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/upcoming.png'


function DashboardTwo() {
    return (
        <div style={{backgroundColor:'#F5F5F5', height: '800px'}}>
            <div style={{border: '1px solid #ECECEC', height: '60px', backgroundColor: '#fff'}}>
                <div style={{float: 'right', border: '1px solid #ECECEC', height: '60px', width: '11%', borderLeftColor: '#fff', borderTopColor: '#fff'}} className='helloBarima'>
                    <img src={img1} style={{width: '30px', height: '30px', margin: '7% 7%'}} className='helloBarimaImg' /> <b>Hello Barima</b>
                </div>
                <div style={{float: 'right', border: '1px solid #ECECEC', height: '60px', width: '4%', borderLeftColor: '#fff', borderTopColor: '#fff'}}>
                    <img src={img} style={{width: '30px', height: '30px', margin: '20% 22%'}} className='spotify' />
                </div>
                <div style={{float: 'right', border: '1px solid #ECECEC', height: '60px', width: '70%', borderLeftColor: '#fff', borderTopColor: '#fff'}}>
                    <input type='text' placeholder='&#xF002; Search for campaigns, history etc' style={{height: '60px', width: '100%', border: '1px solid #ECECEC', borderLeftColor: '#fff', borderTopColor: '#fff', outline: 'none'}} />
                </div>
                <div style={{float: 'right', border: '1px solid #7A30E3', height: '60px', width: '15%', backgroundColor: '#7A30E3', color: '#fff', borderLeftColor: '#fff', borderTopColor: '#fff'}}>
                    <h2 style={{margin: '7% 15%'}} className='helloBarimaMimae'> <b>mi-mae</b></h2>
                </div>
            </div>
            <div style={{float: 'right', border: '1px solid #fff', backgroundColor: '#fff', width: '80%', height: '150px' ,margin: '20px 35px'}}>
                <img src={img2} style={{width: '150px', margin: '10px 15px'}} />
                <hr style={{marginTop: '-2px'}} />
                <div style={{float: 'right', width: '25%', border: '1px solid #ECECEC', height: '80px', margin: '5px auto', borderBottom: 'none', borderTop: 'none', borderRight: 'none'}} className='text-center'>
                    <h1 style={{color: '#003152', fontSize: '40px'}}>2.5M</h1>
                    <br />
                    <p style={{color: '#828282', fontSize: '9px', marginTop: '-10px'}}>TOTAL VISITS</p>
                </div>
                <div style={{float: 'right', width: '25%', border: '1px solid #ECECEC', height: '80px', margin: '5px auto', borderBottom: 'none', borderTop: 'none', borderRight: 'none'}} className='text-center'>
                    <h1 style={{color: '#003152', fontSize: '40px'}}>117K</h1>
                    <br />
                    <p style={{color: '#828282', fontSize: '9px', marginTop: '-10px'}}>TOTAL IMPRESSIONS</p>
                </div>
                <div style={{float: 'right', width: '25%', border: '1px solid #ECECEC', height: '80px', margin: '5px auto', borderBottom: 'none', borderTop: 'none', borderRight: 'none'}} className='text-center'>
                    <h1 style={{color: '#003152', fontSize: '40px'}}><sup style={{color: '#77D426', fontSize: '9px', marginRight: '5px'}}><b>CFA</b></sup>53,653<sub style={{fontSize: '9px'}}>.97</sub></h1>
                    <br />
                    <p style={{color: '#828282', fontSize: '9px', marginTop: '-10px'}}>TOTAL BUDGET</p>
                </div>
                <div style={{float: 'right', width: '25%', border: '1px solid #ECECEC', height: '80px', margin: '5px auto', borderBottom: 'none', borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} className='text-center'>
                    <h1 style={{color: '#003152', fontSize: '40px'}}>37</h1>
                    <br />
                    <p style={{color: '#828282', fontSize: '9px', marginTop: '-10px'}}>TOTAL CAMPAIGNS</p>
                </div>
                <br />
                <img src={img8} style={{width: '150px', marginTop: '30px'}} />
                <hr style={{marginTop: '20px'}} />
                <div className='container'>
                    <div className= 'row' style={{margin: '20px 0px'}}>
                        <div className='col-md-4'>
                            <img src={img9} style={{width: '350px'}} />
                        </div>
                        <div className='col-md-4'>
                            <img src={img0} style={{width: '350px'}} />
                        </div>
                        <div className='col-md-4'>
                            <img src={img01} style={{width: '350px'}} />
                        </div>
                    </div>
                </div>
                <img src={img02} style={{width: '150px', marginTop: '50px'}} />
                <hr style={{marginTop: '20px'}} />
            </div>
            <div style={{width: '15%', height: '100%', border: '1px solid #F5F5F5', margin: '0'}}>
                <div className= 'container' style={{margin: '20px 20px'}}>
                    <div className='row'>
                        <div className= 'col-md-2' style={{border: '1px solid #fff', height: '40px', borderRadius: '50%', margin: '10px auto'}}>
                            <img src={img3} style={{width: '40px', marginLeft: '-15px'}} />
                        </div>
                        <div className= 'col-md-10'>
                            <p style={{color: '#828282', fontSize: '9px', margin: '5px auto'}}>BALANCE</p>
                            <h4 style={{color: '#003152'}}>1469260  F.CFA</h4>
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

export default DashboardTwo
