import React from 'react';
import InputGroup from '../Components/InputGroup';
import Input from '../Components/Input';
var _commonfunction = {
	renderInputGroup(props){
		return <InputGroup {...props}/>;
	},

	renderInput(props){
		return <Input {...props}/>;
	}
}

export default _commonfunction;