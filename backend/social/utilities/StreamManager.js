const databaseConfig = require('../database/DatabaseConfig');

const processMessage = async (kafkaMessage) => {

	//Start working here
	
	console.log(kafkaMessage);
	
	if(kafkaMessage.event_name=="tenant_created")
	{
		databaseConfig('Tenant_Profile').insert(
			kafkaMessage.properties
		).then((_id)=>
		{
			console.log(_id);
		},(err)=>
		{
			console.log(err.stack);
		});
	}
	else
	{
		databaseConfig('User_Profile').insert(
			kafkaMessage.properties
		).then((_id)=>
		{
			console.log(_id);
		},(err)=>
		{
			console.log(err.stack);
		});
	}

};

module.exports = { processMessage };

