import React, {Component} from 'react';
import {Button, Row, Col, Glyphicon } from 'react-bootstrap'; 
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import FileBase64 from 'react-file-base64';

import Select from 'react-select';
import Config from '../../Config'
import Common from '../../Common'
import Validation from '../../Validations'


class Register extends Component{
    constructor(props){ 
        super(props);
        this.state = {
            message: '',
            companyname:'',
            selectedcompnay:'',
            files:'',
      };
    this.updateValue = this.updateValue.bind(this)
    }

    static getDerivedStateFromProps(props){
        if(props.companyname.length>=1){
            return { 
                message : props.message,
                companyname:props.companyname,
             };
        } 
        else{
            return { 
                message : props.message,
             };
        }
     
    }

    componentDidMount(){
       this.props.GetCompanyName();
        document.title=Config.name+' Register';
        return { message : this.props.message};
    }

    updateValue (newValue) {
        this.setState({ selectedcompnay: newValue });
    }

    getFiles(files){
        this.setState({ files: files })
      }



    UserRegister(values){
        values.company_id=this.state.selectedcompnay.value
        values.user_image = this.state.files.base64
        delete values.confirmpassword;
        console.log('values', values)
        this.props.userRegister(values);
    }



    render(){
        const { handleSubmit, submitting } = this.props
        return   <form onSubmit={handleSubmit( this.UserRegister.bind(this))}>
        <Field name="first_name" type="text" component={Common.renderInput} label="First Name" placeholder="Enter Your First Name"/>
        <Field name="last_name" type="text" component={Common.renderInput} label="Last Name" placeholder="Enter Your Last Name"/>
        <Field name="email" type="email" component={Common.renderInput} label="Email" placeholder="Enter Your Email"/>
        <Field name="password" type="password" component={Common.renderInput} label="Password"  placeholder="Enter Your Password"/>
        <Field name="confirmpassword" type="password" component={Common.renderInput} label="password" placeholder="Enter Your Confirm Password"/>
        <Select id="state-select" ref={(ref) => { this.select = ref; }} autoFocus options={this.state.companyname} clearable={true} name="company_id" searchable={true} clearable={true} name="companyname" disabled={this.state.disabled} value={this.state.selectedcompnay} onChange={this.updateValue} rtl={this.state.rtl} searchable={true} />
        <div className="form-group">
            <FileBase64 multiple={ false } onDone={ this.getFiles.bind(this) } />
        </div>
        <div className="form-action">
          <Row>
              <Col xs={6}>
                  <Button type="submit" bsStyle="primary" block disabled={submitting}>Register</Button>
              </Col>
              <Col xs={6}>
                  <Link to="/login" className="btn btn-primary"> <Glyphicon glyph="user" /> Login</Link>
              </Col>
          </Row>
        </div>
      </form>;
    }
}

export default reduxForm({
    form:'RegisterFrom',
    validate:Validation.ValidateRegistationForm
})(Register);




