import React,{Component} from 'react';
import {HashRouter as Router, Route, Switch}  from 'react-router-dom';
import Login from '../Login'
import Register from '../Register'
import Indexwrapper from '../Indexwrapper';
import AdminDashboard from '../AdminDashboard';
import Dashboard from '../Dashboard';
import UploadData from '../UploadData';
import InsertProduct from '../InsertProduct';

import Config from '../../Config'
const UsernameContext = React.createContext('');


class WebRouter extends Component{
	constructor(props) {
		super(props);
		this.state = { username: 'dhileep' };
	}
	render(){
		return <Router>
					<Switch>
						
					<AdminDashboard {...this.props} {...Config} userdetails={this.state.username} path="/supplier">
					
							<Route path="/supplier/dashboard"  render = {(props)=> <Dashboard {...this.props} userdetails={this.state.username}/>} />
							<Route path="/supplier/uploaddata"  render = {(props)=> <UploadData {...this.props} userdetails={this.state.username}/>} />
							<Route path="/supplier/insertproduct"  render = {(props)=> <InsertProduct {...this.props} userdetails={this.state.username}/>} />
						</AdminDashboard>
					
						<Indexwrapper  {...this.props} >
							<Route exact path="/"   render = {(props)=> <Login {...this.props}/>} />
							<Route path="/login"   render = {(props)=> <Login {...this.props}/>} />
							<Route path="/register"   render = {(props)=> <Register {...this.props}/>} />
							
						</Indexwrapper>

						

					</Switch>
			  </Router>
	}
}


export default WebRouter;