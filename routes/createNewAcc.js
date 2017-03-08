var fs = require('fs');
var data = require("../people.json");

exports.view = function (req, res) {
    res.render('create-new-account');
};

exports.createNewUser = function (req, res) {
	var uname = req.query.user_name;
	var upass = req.query.user_pass;
	var newUser = {
		"username": uname,
		"password": upass
	}
	console.log(newUser);
	data.users.push(newUser);
	var json = JSON.stringify(data);
	fs.writeFile("people.json", json, 'utf8', function errorCallback(err) {
        //console.log("write");
        if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            res.render('index', data);
        }
    });
};