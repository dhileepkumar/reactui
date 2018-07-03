import React, {Component} from 'react';
import { Alert } from 'react-bootstrap'; 

class AlertDismissable extends Component {
    constructor(props) {
      
      super(props);
      this.handleDismiss = this.handleDismiss.bind(this);
      this.state = {
            show: false,
            message: this.props.message
      };
    }

    static getDerivedStateFromProps(props, state){
       
        if(props.message!==state.message){
          return { 
            show: true,
            message : props.message
          };
        }
        else{
          return { 
            show: false,
            message : ''
          };
        }
    }

    componentDidMount(){
     
    }

    componentDidUpdate(prevProps, prevState){
      console.log('cs',prevState);
      console.log('cp',this.props);
      console.log('pp',prevProps);
    }
  
    handleDismiss() {
      this.setState({ show: false });
    }

    componentWillUnmount(){
      console.log('unmouint', this.state.show)
    }
  

  
    render() {
        return (
          <Alert bsStyle={this.props.color} onDismiss={this.handleDismiss} className={(this.state.show) ? '' : 'hidden' }>
             {this.state.message}
          </Alert>
        );
    }
  }

export default AlertDismissable;



