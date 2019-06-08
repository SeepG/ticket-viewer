
// static class variable -to be explained later.
class Config
{
	static get port(){
		return process.env.PORT;
	}
	static get username(){
		return process.env.USERNAME;
	}
	static get password(){
		return process.env.PASSWORD;
	}
}

export default Config;