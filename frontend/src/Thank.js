import React from 'react' 
import {Link} from 'react-router-dom'
import "./Thank.css"
import tick from './image/tick.png'

const Thank = () => { 
    return(
        <div>
            <div className="body11" style={{fontSize:"13px"}}>
                <div className="content11">
                    <div classNameName="wrapper-11">
                        <div className="wrapper-22" style={{border:'1px solid lightgreen        ', borderRadius:'16px',boxShadow:'0 0 25px lightgreen'}}>
                            <img src={tick} alt="tick image" height="17%" width="17%" style={{paddingBottom: "4% "}}/>
                            <p>Thank you for choosing The Pet Emporium to</p>
                            <p>provide nourishment for your beloved furry friend!</p>
                            <Link className='abc1' to="/" style={{ textDecoration: "none",textAlign:'center',lineHeight:'50px' }}>Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Thank;