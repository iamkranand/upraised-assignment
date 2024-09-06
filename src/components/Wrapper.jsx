import React from 'react';
import topimage from './../assets/top-image.jpg'
import './../App.css'

const Wrapper = (props) => {
  return (
    <div className='wrapper'>
    {/* top design */}
        <div className='topDesign'>
            <img src={topimage} alt="" height='100%' width = '100%'/>
        </div>
        <div className='question'>{props.children}</div>
    </div>
  )
}

export default Wrapper