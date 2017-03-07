var data = require("../myAccount.json");

exports.view = function (req, res) {
    res.render('edit-profile');
}

exports.addInfo = function (req, res) {    
    var name=req.body.type;
	var usage=req.body.usage;
	var content = req.body.content;

	console.log(name);
	console.log(usage);
	console.log(content);

	var newFriend={
		"name": name,
		"usage": usage,
		"content": content,			
	};

	console.log(newFriend);

	data.profile.push(newFriend);
	
	res.send(newFriend);
}