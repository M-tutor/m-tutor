import React from 'react';
import './dashboard.css';
import LeftRectangle from '../../components/dashboard/rectangles/leftRectangle';
import RightRectangle from '../../components/dashboard/rectangles/rightRectangle';
import BottomRectangle from '../../components/dashboard/rectangles/bottomRectangle';
import ProgressBar from '../../components/dashboard/progressBar/progress';
import Navbar from '../../components/dashboard/navbar/navbar';


function Dashboard() {
    return (
       <>
       <div className="bg-color">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className='prog'>
                <h2 style={{paddingLeft:"4.5vw"}}>Total points</h2>
                <ProgressBar percentage={50} />
            </div>
            <div className="middle">
                <LeftRectangle/>
                <RightRectangle/>
            </div>
            <div className="bottom">
                <BottomRectangle/>
            </div>
        </div>

       </> 
        
    );
}

export default Dashboard;
