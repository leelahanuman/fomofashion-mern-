import React from "react";
import lab from "../Images/lab-1.png";
import lab1 from "../Images/lab-1-1.png";
import lab2 from "../Images/lab-1-2.png";
import lab4 from "../Images/lab4.png";
import lab5 from "../Images/lab5.png";
import lab6 from "../Images/lab-6.png";
import lab7 from "../Images/lab7.png";
import lab8 from "../Images/lab-8.png";
import lab9 from "../Images/lab-9.png";
const Labs = () => {
  return (
    <>
      <div className="main">
        <div className="infor">
          <h1>Take Risks</h1>
          <p>
            Because you have to take risks if you want to build the next big
            idea.
          </p>
        </div>
        <div className="identity">
          <img src={lab6} alt=".." />
          <img src={lab5} alt=".." />
          <img src={lab4} alt=".." />
        </div>
      </div>
      <div className="main right">
        <div className="identity">
          <img src={lab} alt=".." />
          <img src={lab1} alt=".." />
          <img src={lab2} alt=".." />
        </div>
        <div className="infor">
          <h1>CREATE</h1>
          <p>
            Ideas to the next level with people who make you want to be the
            best.
          </p>
        </div>
      </div>
      <div className="main">
        <div className="infor">
          <h1>CHAMPION OUR MISSION</h1>
          <p>Woodland is an equal opportunity employer. </p>
          {/* <p>positive attitude and clean work ethic are the only requirements to succeed here. </p> */}
        </div>

        <div className="identity">
          <img src={lab7} alt=".." />
          <img src={lab8} alt=".." />
          <img src={lab9} alt=".." />
        </div>
      </div>
    </>
  );
};

export default Labs;
