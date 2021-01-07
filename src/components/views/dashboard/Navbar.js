import React from 'react'
import img from '/Users/donald/Documents/Codes/mimae/src/assets/images/dashboard/spotify.png'
import img1 from '/Users/donald/Documents/Codes/mimae/src/assets/images/landingPage/lady.png'

function Navbar() {
    return (
        <div className='Navbar'>
            <div style={{border: '1px solid #ECECEC', height: '60px'}}>
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
        </div>
    )
}

export default Navbar
