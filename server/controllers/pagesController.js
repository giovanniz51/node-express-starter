const express = require('express');

const pagesController = {
	home(req, res) {
		res.render('home', { title: 'Portfolio Homepage' });
	},
	about(req, res) {
		res.render('about', { title: 'Portfolio About' });
	}
};

module.exports = pagesController;
