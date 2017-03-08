var friends = require('../people.json');
/*
 * GET home page.
 */

exports.view = function (req, res) {
	friends["verb"] = false;
    res.render('index', friends);
};

exports.verb = function (req, res) {
	friends["verb"] = true;
	var username = req.params.user_name;
	res.render('index', friends);
};