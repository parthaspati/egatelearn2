import partha from '../myimage/partha.jpg'
import Frame from '../reactframes/Frame';
import Frames  from '../reactframes/Frames';
import Frameset from '../reactframes/Frameset';
import React, { useState } from "react";


const Home = () => {
  let [frameBorder, setFrameBorder] = useState(true);
	let [noResize, setNoResize] = useState(true);
	let [scrolling, setScrolling] = useState(false);

	

	let frameProps = {
		frameBorder,
		noResize,
		scrolling,
		stylesheet: "styles.css" // Shared stylesheet for all frames
	};

  return (
    <div>
    <img className="photo" src={partha} alt="myimage" />
    <Frames title="React Frames">
    <Frameset  rows="120,*" key={frameBorder}>
      <Frame  {...frameProps}>
        <h1 > Egate Learn</h1>
        <p>Training and Development center </p>
        <p>Training and Development center </p>
        

      </Frame>
      <Frame >
        Here goes text
        Here goes text
        Here goes text
        
      </Frame>
      </Frameset>
      </Frames>

    </div>);
};

export default Home;
