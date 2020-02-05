const mongoose = require("mongoose");

let schema = new mongoose.Schema({
	coin: {type: String},
	price : {type: Number},
	hourly: {
		price : {type: Number},
		updated: { type: Date, default: Date.now }
	},
	daily: {
		price : {type: Number},
		updated: { type: Date, default: Date.now }
	},
	weekly: {
		price : {type: Number},
		updated: { type: Date, default: Date.now },
	},
	url : {type: String}
});

module.exports = mongoose.model("Bitcoins", schema);
