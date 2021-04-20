const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { concatSeries } = require('async');
const { render } = require('ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//shared javascripts objects
const date = require(__dirname+'/modules.js');

//setup ejs
app.set('view engine', 'ejs')
var itemList = [];
var workItem = [];

app.get("/", function (req, res) { 
	//res.send("Hello!!!")
	/*
	var date = new Date();
	var options = {
		weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "numeric"
	}*/
	let day = date.getDate()
	//render information to ejs
	res.render("list",{day: day, itemList: itemList});
 });

app.post("/", (req, res) => {
	var item = req.body.newItem;
	var type = req.body.btn;
	console.log(req.body)
	if (item){
		if (type === "Work"){
			workItem.push(item);
			res.redirect("/work")
		}else{
			itemList.push(item)
			res.redirect("/");
		}
	}
	//redirect to main page and render details
});

app.get("/work", (req, res) => {
	/*
	var date = new Date();
	var options = {
		weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "numeric"
	}
	*/
	let day = date.getDate()
	res.render("list",{day: "Work "+day, itemList: workItem});
});

app.listen('8080', () => {
	console.log('server is running at port 8080');
	itemList = []
});

