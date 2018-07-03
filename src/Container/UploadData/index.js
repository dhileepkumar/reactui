import React, {Component} from 'react';
import Config from '../../Config'

class UploadData extends Component{
    componentDidMount(){
        console.log(this.props)
        document.title=Config.name+' Dashbaord '
       
    }
    render(){
        return <div className="page-wrapper">UploadData</div>;
    }
}

export default UploadData



