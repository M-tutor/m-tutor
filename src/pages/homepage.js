import React from "react";
import Navbar from "../components/navbar";
import Content from "../components/content";
class HomePage extends React.Component {
    render(){
        return(
            <div>
            <Navbar/>
           <Content/>
           </div>
    );
}
}

export default HomePage;