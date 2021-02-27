import React from 'react'
import spinner from './landing.gif'

function Spinner() {
    return (
        <div >
            <img
                src={spinner}
                style={{ width: '100px', height:'92px', display: 'block',position:'fixed', top:'270', left:'100px'}}
                alt="Loading..."
            />
        </div>
    )
}

export default Spinner