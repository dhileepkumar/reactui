import 'whatwg-fetch'
const site_name = 'http://172.16.5.151/trustedsource/api/';

let UserAPI = {
    UserLogin(values){
			return fetch(site_name+'login',{
				method: "POST",
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json",

				},
		}).then((response)=>response.json());
	},

	UserRegister(values){
		return fetch(site_name+'userregister',{
			method: "POST",
			body: JSON.stringify(values),
			headers: {
				"Content-Type": "application/json",

			},
	}).then((response)=>response.json());
},


	CompnayName(){
		return fetch(site_name+'companyautocomplete',{
				method: "POST",
				headers: {
					"Content-Type": "application/json",

				},
		}).then((response)=>response.json());
	}
}
export default UserAPI;