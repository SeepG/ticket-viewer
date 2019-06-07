class Config
{
	static get port(){
		return process.env.PORT;
	}
}

export default Config;