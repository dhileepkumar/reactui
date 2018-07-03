import React, {Component} from 'react';
import Config from '../../Config'

class Dashboard extends Component{
    componentDidMount(){
        console.log(this.props)
        document.title=Config.name+' Dashbaord '
       
    }
    render(){
        return <div className="page-wrapper">121231231231231233</div>;
    }
}

export default Dashboard



