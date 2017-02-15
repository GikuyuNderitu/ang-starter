const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	index: function (req, res) {
		let values = {}
		// values.partial = 'all'
		// console.log('Hit home route');
		// User.find({},(err, objs) =>{
		// 	if(err) console.log(`There was some sort of error \n ${err}`);
		// 	else {
		// 		console.log('querried DB');
		// 		values.users = objs
		// 		console.log(values.users);
		// 		return res.render('index', values)
		// 	}
		// })
		return res.render('index')
	}
}
