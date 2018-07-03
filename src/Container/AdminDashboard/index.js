import React, {Component, Fragment} from 'react';
import Sidebar from '../../Components/Sidebar'
import PannelHeader from '../PannelHeader'
import {Redirect}  from 'react-router-dom';

class AdminDashboard extends Component{
    constructor(props){ 
       
        super(props);
        console.log(',ew',this.props)
        this.state = {
            auth: this.props.auth
      };
    }


 

    static getDerivedStateFromProps(props){
       return { auth : props.auth};
    }

    componentDidMount(){
       
    }
    render(){
        
        if(this.state.auth===false){
            return <Redirect to="/login" />
        }
        return <Fragment>
                   <Sidebar menu={this.props.suppliermenu} />
                   <div className="mainwrapper">
                        <div className="userheader">
                            <div className="no-gutter">
                                <PannelHeader  username={this.props.userdetails} rightmenu={this.props.supplierrightmenu}/>
                            </div>
                        </div>
                        {this.props.children}    
                   </div>
              </Fragment>;
    }
}

export default AdminDashboard



