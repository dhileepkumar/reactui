import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import WebRouter from './Container/WebRouter'
import AppStore from './Store/AppStore'
import ActionCreators from './Actions/ActionCreators'
import './App.css';

const mapStateToProps = (state) => ({
  auth:state.auth.auth,
  token:state.auth.token,
  message:state.auth.authmessage,
  companyname : state.companyname.companyname,
  compnaynamemessage : state.companyname.companymessage,
})


const mapDispatchToProps = (dispatch) => ({
  UserLogin: (values) => dispatch(ActionCreators.userLogin(values)),
  userRegister: (values) => dispatch(ActionCreators.userRegister(values)) ,
  GetCompanyName: () => dispatch(ActionCreators.CompanyName())
})

const MainComponent  = connect(mapStateToProps, mapDispatchToProps)(WebRouter);

class App extends Component {
  render() {
    return <Provider store={AppStore}><MainComponent/></Provider>
  }
}

export default App;
