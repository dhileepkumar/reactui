import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom';


class PannelHeader extends Component{
    constructor(props){
        super(props)
     
    }

    handlelogout = () =>{
       console.log( ReactDOM.findDOMNode(this.refs.profile_dashbaord).className = ReactDOM.findDOMNode(this.refs.profile_dashbaord).className+' open')
    }
  
    render(){
        return <Fragment><div className="head_name">
                    <div className="mhamicon pull-left">
                        <Link to="#" className="mham"><i className="fa fa-bars fa-2x"></i></Link>
                    </div>
                    <div className="company_name">
                        <Link to="/user/dashboard">
                            <img src="/assets/images/icon1_white.png" alt="Icon" /> Supplier Dashboard
                        </Link>                 
                    </div>
                   
                </div>
                 <div className="head_companyname">
                    <div className="userdet">
                        <ul>
                            <li className="cyname"><Link to="#">{this.props.username}</Link></li>
                            <li className="notification">
                                <Link to="/supplier/productbrowser"> <i className="fa fa-bell-o"></i> <span className="badge">1</span></Link>
                            </li>
                            <li className="messages">
                                <Link to="/supplier/productbrowser"> <i className="fa fa-envelope-o"></i></Link>
                            </li>
                            <li className="uprofile online dropdown"  onClick={this.handlelogout} ref="profile_dashbaord">
                                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" >
                                    <span className="uimg">
                                        <img src="assets/images/saro.jpg" alt="User" />
                                    </span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right" >
                                    <li>
                                        <a href="/supplier/logout">
                                            <i className="fa fa-sign-out"></i> 
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                 </div>
                 </Fragment>;
    }
}

export default PannelHeader



