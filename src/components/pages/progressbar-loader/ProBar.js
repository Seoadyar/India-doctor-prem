import React from "react";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
 
import ChangingProgressProvider from "./ChangingProgressProvider";
import './ProBar.css'
 

 

const ProBar = () => (
  <div>
    <Example>
      <ChangingProgressProvider values={[0,100]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            
            styles={buildStyles({
              pathTransitionDuration: 1.5
            })}
          />
        )}
      </ChangingProgressProvider>
      </Example>
  </div>
);

function Example(props) {
  return (
    <div >
     
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "250px",backgroundColor:"white",borderRadius:"50%" }}>{props.children}</div>
        <div style={{ width: "40%" }}>
        </div>
      </div>
    </div>
  );
}

export default ProBar;
