import React from 'react';
import Wrapper from './Wrapper';
import {GaugeComponent} from 'react-gauge-component';
import './../App.css'

const Result = () => {
  return (
    <>
      <Wrapper>
      <div className="componentContainer">
        <GaugeComponent
          value={65}
		  type="radial"
          arc={{
			colorArray: ['#FF2121','#00FF15' ],
            gradient: true,
            width: 0.3,
            padding: 0.02,
            subArcs: [{limit: 40 },{limit: 60},],
          }}
          
		  pointer={{type: "arrow", elastic: true}}
        />
		{/* show correct and incorrect count */}
	  <button className="buttonAll next">Next</button>
      </div>
	  </Wrapper>
    </>
  );
};

export default Result