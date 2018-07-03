import React, {Component} from 'react';
import Logo from '../Logo'
import {Link} from 'react-router-dom'



class Sidebar extends Component{

    constructor(props){
        super(props)
        this.menu= this.extractmenu(this.props.menu);
    }

  
    extractmenu = (list) =>{
    var listmenu='';
        if(list.length){
            listmenu =  list.map((list,index)=>{
                return <li key={index}><Link to={list.weblink}>
                    <span className="nr">
                        <img src={list.icon} alt="icon" />
                    </span>
                    <span className="av">
                        <img src={list.icon} alt="icon" />
                    </span>
                {list.weblinkname}</Link></li>
            })
        }
        else{
            listmenu='';
        }
        return listmenu;
    }
    
    render(){
        return <div className="sidebar">
                    <Logo/>
                    <div className="navigation">
                        <ul>
                            { this.menu }
                        </ul>
                    </div>
                    <div className="close_sidebar"><Link to="/user/dashbaord"><i className="fa fa-close fa-2x"></i></Link></div>
                </div>;
    }
}

export default Sidebar



