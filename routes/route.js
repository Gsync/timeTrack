const express = require('express');

const router = express.Router();
const db = require('../models');

const helpers = require('../helpers/projectHelpers');

router.route('/')
  .get(helpers.getProjects)
  .post(helpers.createProjects);

router.route('/:pid')
  .get(helpers.getProject)
  .put(helpers.updateProject)
  .delete(helpers.deleteProject);

module.exports = router;
