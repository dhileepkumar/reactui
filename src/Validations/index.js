const AppValidation = {
	ValidateLoginForm(values){
		const errors = {}
		if (!values.email) {
			errors.email = 'Email is Required';
		}
		else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)))
		{
			errors.email = 'Enter valid Email Address';
		} 
		else if (values.email.length > 30) {
			errors.email = 'Must be 20 characters or less';
		}
		
		if (!values.password) {
			errors.password = 'Password is Required';
		} else if (values.password.length<6){
			errors.password = 'Password must have atleat 6 characters';
		}

		return errors
		  
	},

	ValidateRegistationForm(values){
		const errors = {}
		if(!values.firstname){
			errors.firstname = 'First Name is required';
		}

		if (!values.lastname){
			errors.lastname = 'Last Name is required';
		}

		if (!values.email){
			errors.email = 'Email is Required';
		}

		if (!values.email){
			errors.email = 'Must be 20 characters or less';
		}
		else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))){
			errors.email = 'Enter valid Email Address';
		}
		else if (values.email.length > 30) {
			errors.email = 'Must be 20 characters or less';
		}

		if (!values.password) {
			errors.password = 'Password is Required';
		} else if (values.password.length<6){
			errors.password = 'Password must have atleat 6 characters';
		}

		if (!values.confirmpassword) {
			errors.confirmpassword = 'Confirm Password is Required';
		} else if (values.confirmpassword.length<6){
			errors.confirmpassword = 'Confirm Password must have atleat 6 characters';
		}

		if(values.password!==values.confirmpassword){
			errors.password = 'Password must be same as confirm password';
			errors.confirmpassword = 'Confirm Password be same as password';
		}

		if (!values.companyname) {
			errors.companyname = 'Company Name is Required';
		}

		return errors;
	}

};

export default AppValidation;