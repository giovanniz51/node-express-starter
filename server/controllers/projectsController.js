const express = require('express');

const projectsController = {
	index(req, res) {
		res.send('projects');
	}
};

module.exports = projectsController;
