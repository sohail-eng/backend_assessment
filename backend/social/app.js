require('dotenv').config()

const express = require('express');
// const { initConsumer } = require('./utilities/consumer');
// const { initProducer } = require('./utilities/producer');
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
 const databaseConfig = require('./database/DatabaseConfig');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(databaseConfig.initializeDB());

//app.use('/', async (req, res) => {

	//res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

//});

app.use((req, res, next) => {
	
	next();
  });

  process.on('unhandledRejection', function(reason, promise) {
    console.log(promise);
});

app.post('/tenant_profie',(req,res)=>
{
	databaseConfig('Tenant_Profile').insert(
		req.body
	).then((_id)=>
	{
		res.send({"Result":"Record Inserted "});
		console.log(_id);
	},(err)=>
	{
		res.send({"Result":"Error: Please Check Your Data"});
		console.log(err.stack);
	});
})	

app.post('/user_profile',(req,res)=>
{
	databaseConfig('User_Profile').insert(
		req.body
	).then((_id)=>
	{
		res.send({"Result":"Record Inserted "});
		console.log(_id);
	},(err)=>
	{
		res.send({"Result":"Error: Please Check Your Data"});
		console.log(err.stack);
	});
})	


app.get('/tenant_profie',(req,res)=>
{
	databaseConfig.select().from('Tenant_Profile').then((users)=>
		{
			res.json(users);
		}).catch();
})	


app.get('/user_profile',(req,res)=>
{
	databaseConfig.select().from('User_Profile').then((users)=>
		{
			res.json(users);
		});	
})

app.get('/tenant_profie/:id',(req,res)=>
{
	databaseConfig.select().from('Tenant_Profile').where("tenant_id",req.params.id).then((users)=>
	{
		res.json(users);
	});
})

app.get('/user_profile/:id',(req,res)=>
{
	databaseConfig.select().from('User_Profile').where("user_id",req.params.id).then((users)=>
	{
		res.json(users);
	});	
})

app.delete('/tenant_profie/:id',(req,res)=>
{
	databaseConfig('Tenant_Profile').where("tenant_id",req.params.id).del().then((count)=>
	{
		res.send({"Result":"Deleted Records : "+ count});
	},(err)=>
	{
		res.send({"Result":"Error: Please Check Your Data"});
		console.log(err.stack);
	});
})

app.delete('/user_profile/:id',(req,res)=>
{
	databaseConfig('User_Profile').where("user_id",req.params.id).del().then((count)=>
	{
		res.send({"Result":"Deleted Records : "+ count});
	},(err)=>
	{
		res.send({"Result":"Error: Please Check Your Data"});
		console.log(err.stack);
	});
})

app.patch('/tenant_profie/:id',(req,res)=>
{
	databaseConfig('Tenant_Profile').where("tenant_id",req.params.id).update(req.body).then((count)=>
	{
		res.send({"Result":"Updated Records : "+ count});
	},(err)=>
	{
		res.send({"Result":"Error: Please Check Your Data"});
		console.log(err.stack);
	});
})

app.patch('/user_profile/:id',(req,res)=>
{
	databaseConfig('User_Profile').where("user_id",req.params.id).update(req.body).then((count)=>
	{
		res.send({"Result":"Updated Records : "+ count});
	},(err)=>
	{
		res.send({"Result":"Error: Please Check Your Data"});
		console.log(err.stack);
	});
})

app.get('/test',(req,res)=>
{
	console.log(databaseConfig);
	res.send("Hello");
})

async function  check_params( json, paramlist)
{
	var jsd={};

	await paramlist.forEach(element => {
		if(!json[element])json[element]="";
		jsd[element]=json[element];
		console.log(element);
	});
	return jsd;
}

app.listen(process.env.SOCIAL_PORT, async () => {
	
	console.log('App started at port', process.env.SOCIAL_PORT );//|| 5000);
	//console.log(databaseConfig);
	
	//await initProducer();
});