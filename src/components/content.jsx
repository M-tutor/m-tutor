import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Content = () => {
    // You can use useState to manage state in functional components
    // For example, if you need to track some state changes in your component

    // Example:
    // const [someState, setSomeState] = useState(initialValue);

    const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to the signup page
    navigate("/signup");
  };

  const handleContinueAsGuestClick = () => {
    // Navigate to the dashboard
    navigate("/dashboard",{state:{useravailable:false}});
  };


    return (
        <div className="content">
            <div className="text-content">
                <h2 className="white">LAUNCH YOUR JOURNEY <br/>INTO THE WORLD OF
                </h2>
                <h1 className="blackish">MATHEMATICS</h1>
                <div className="two-button">
                    <button className="w-btn btn" onClick={handleRegisterClick}>Register</button>
                    <button className="t-btn btn" onClick={handleContinueAsGuestClick}>Continue as guest</button>
                </div>
            </div>
        </div>
    );
};

export default Content;


// import React from "react";


//     class Content extends React.Component {
        
//         render() {
//             return(
//                 <div className="content">
//         <div className="text-content">
//             <h2 className="white">LAUNCH YOUR JOURNEY <br/>INTO THE WORLD OF
//             </h2>
//             <h1 className="blackish">MATHEMATICS</h1>
//             <div className="two-button">
//                 <button className="w-btn btn">Register</button>
//                 <button className="t-btn btn">Continue as guest</button>
//             </div>

//         </div>
//         </div> );
//         }
//     }

// export default Content;