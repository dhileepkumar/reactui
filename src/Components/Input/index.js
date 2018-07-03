import React, {Component} from 'react';
class Input extends Component{
    render(){
        return <div className="form-group">
               <input  {...this.props.input} type={this.props.type} className="form-control hlgin" placeholder={this.props.placeholder} name={this.props.inputname} id={this.props.inputname} />
               
                <div className="text-danger">
                    {this.props.meta.touched && ((this.props.meta.error && <span>{this.props.meta.error}</span>) || (this.props.meta.warning && <span>{this.props.meta.warning}</span>))}
                </div>
            </div>;
    }
}

export default Input;


