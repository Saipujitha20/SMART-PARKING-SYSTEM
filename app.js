const express = require('express')
const bodyParser = require('body-parser')
const Web3 = require('web3');
const res = require('express/lib/response');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// console.log(web3.providers);

const web3 = new Web3("http://127.0.0.1:7545");
// const web3 = new Web3("https://ropsten.infura.io/v3/37ce477e00c14a8390548738542dd9aa");
web3.eth.getAccounts(function(err,accounts){
    console.log(accounts)
})

var account = "0x70fAE7E77A107Ef56D108ceB1c8F1E64327Dfeef"

// hidestream
var pkey = "5be009d4048e064d0d64d439e80b575a427bc48510476b2a481df86e6399633d"

var abi =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_userid",
				"type": "string"
			}
		],
		"name": "getparkingdetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_userid",
				"type": "string"
			}
		],
		"name": "getuser",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_userid",
				"type": "string"
			}
		],
		"name": "getuserdetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_userid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_parkinglocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_parkingid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_updateslot",
				"type": "string"
			}
		],
		"name": "setparkingdetailIN",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_userid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_updateslot",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_takeawaytime",
				"type": "string"
			}
		],
		"name": "setparkingdetailOUT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_userid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_parkintime",
				"type": "string"
			}
		],
		"name": "setparkingtime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_userid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_mobilenumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_userlocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_vehiclenumber",
				"type": "string"
			}
		],
		"name": "setuser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_timeatparked",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_timeatout",
				"type": "uint256"
			}
		],
		"name": "time",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]

var contractAddress = "0xe6093D1596Ba4E23f0CCB79fe01609037E4fa0Ca";

var myContract = new web3.eth.Contract(abi,contractAddress);

console.log(myContract.methods);

app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/main.html' );
});
app.get('/public/user.html',function (req,res){
	res.sendFile(__dirname + '/public/user.html' );
});



app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/user.html' );
});
app.get('/public/user.html',function (req,res){
	res.sendFile(__dirname + '/public/user.html' );
});
app.get('/public/parkin.html',function (req,res){
	res.sendFile(__dirname + '/public/parkin.html' );
});
app.get('/public/takeaway.html',function (req,res){
	res.sendFile(__dirname + '/public/takeaway.html' );
});



app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/parkin.html' );
});
app.get('/public/parkin.html',function (req,res){
	res.sendFile(__dirname + '/public/parkin.html' );
});
app.get('/public/timein.html',function (req,res){
	res.sendFile(__dirname + '/public/timein.html' );
});



app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/timein.html' );
});
app.get('/public/timein.html',function (req,res){
	res.sendFile(__dirname + '/public/timein.html' );
});
app.get('/public/main.html',function (req,res){
	res.sendFile(__dirname + '/public/main.html' );
});




app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/takeaway.html' );
});
app.get('/public/takeaway.html',function (req,res){
	res.sendFile(__dirname + '/public/takeaway.html' );
});
app.get('/public/details.html',function (req,res){
	res.sendFile(__dirname + '/public/details.html' );
});



app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/details.html' );
});
app.get('/public/details.html',function (req,res){
	res.sendFile(__dirname + '/public/details.html' );
});
app.get('/public/buywallet.html',function (req,res){
	res.sendFile(__dirname + '/public/main.html' );
});








app.post('/enrolluser',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setuser(req.body.userid,req.body.name,req.body.mobilenumber,req.body.userlocation,req.body.vehiclenumber).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})


app.post('/enrollparkingin',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setparkingdetailIN(req.body.userid,req.body.parkinglocation,req.body.parkingid,req.body.date,req.body.updateslot).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})


app.post('/enrollparkingtime',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setparkingtime(req.body.userid,req.body.parkintime).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})





app.post('/enrollparkingout',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setparkingdetailOUT(req.body.userid,req.body.updateslot,req.body.takeawaytime).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})



app.post('/enrollbuywallet',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.buywallet(req.body.userid,address(req.body.user),req.body.amount).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})


app.get('/getparkingoutinfo',function (req,res){
	console.log("userid query:",req.query);
    myContract.methods.getparkingdetails(req.query.userid).call({from:account})
.then(function(result){
    console.log(result);
    res.send("</br>"+"User ID :"+"&nbsp"+"&nbsp"+result[0]+"</br>"+"Name :"+"&nbsp"+"&nbsp"+result[1]+"</br>"+"Parking Location :"+"&nbsp"+"&nbsp"+result[2]+"</br>"+"Date :"+"&nbsp"+"&nbsp"+result[3]+"</br>"+"Parking ID :"+"&nbsp"+"&nbsp"+result[4]+"</br>"+"Time at parked :"+"&nbsp"+"&nbsp"+result[5]+"<br>"+"Time at out :"+"&nbsp"+"&nbsp"+result[6]);
});

});

app.get('/getticketinfo',function (req,res){
	console.log("time query:",req.query.timeatparked,req.query.timeatout);
    myContract.methods.time(req.query.timeatparked,req.query.timeatout).call({from:account})
.then(function(result){
	console.log('getticketinfo Result:');
    console.log(result);
    res.send("</br>"+"TICKET :"+"&nbsp"+"&nbsp"+result);
});

});



app.listen(3000,() => {
	console.log("I am listinig at post 3000 !");
})
