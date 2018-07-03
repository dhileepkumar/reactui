import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Logo extends Component{
    render(){
        return <div className="logo"><Link to="/user/dashbaord"><img src="assets/images/logo.png" alt="Logo" /></Link></div>;
    }
}
export default Logo



