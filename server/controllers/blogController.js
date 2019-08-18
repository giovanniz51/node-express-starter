const express = require('express');

const blogController = {
	index(req, res) {
		res.send('blog');
	}
};

module.exports = blogController;
