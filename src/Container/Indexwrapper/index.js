import React, {Component, Fragment} from 'react';
import {Grid, Row, Col } from 'react-bootstrap'; 
import LoginImage from './desk.jpg';
import LoginHeader from '../../Components/LoginHeader'
import AlertDismisable from '../../Components/AlertDismissable'
import {Redirect}  from 'react-router-dom';

class Indexwrapper extends Component{
    
    constructor(props){ 
        super(props);
        this.state = {
            message: '',
            auth:this.props.auth
      };
    }

    static getDerivedStateFromProps(props){
       return { 
           message : props.message,
           auth:props.auth
      };
    }

    componentDidMount(){
        
    }

    render(){
        if(this.state.auth===true){
            return <Redirect to="/supplier/dashbaord" />
        }
        return <Fragment>
                    <LoginHeader/>
                    <Grid fluid={true}>
                        <Row>
                            <Col xs={8}>
                                <div className="login-wrapperleft">
                                    <div className="login_wrpcontent text-center">
                                            <h3>TrustedSource is a cloud based digital product content portal, providing verified data and digital assets to serve the connected world.</h3>
                                            <img src={LoginImage} alt="Desktop" />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className="login-wrapperright">
                                    <div className="login_form">
                                            <AlertDismisable message={this.state.message} color='danger'/>
                                            {this.props.children}
                                          
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
              </Fragment>;
    }
}

export default Indexwrapper



