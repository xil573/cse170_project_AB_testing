var menu = require('../testing.json');
exports.view = function (req, res) {
	menu["bar"] = true;
    res.render('select_info', menu);
};
exports.viewNoBar = function (req, res) {
	menu["bar"] = false;
	res.render('select_info', menu);
}