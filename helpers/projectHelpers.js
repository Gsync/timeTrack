const db = require('../models');

exports.getProjects = (req, res) => {
  db.Project.find()
    .then(p => res.json(p))
    .catch(error => res.send(error));
};

exports.getTasks = (req, res) => {
  db.Project.findById(req.params.pid)
    .then(p => res.json(p.tasks))
    .catch(error => res.send(error));
};

exports.createProjects = (req, res) => {
  db.Project.create(req.body)
    .then(p => res.json(p))
    .catch(error => res.send(error));
};

exports.createTask = (req, res) => {
  db.Project.findByIdAndUpdate(
    req.params.pid,
    { $addToSet: { tasks: req.body } },
    { upsert: true, new: true },
  )
    .then((p) => {
      res.json(p);
    })
    .catch(error => res.send(error));
};

exports.getProject = (req, res) => {
  db.Project.findById(req.params.pid)
    .then(p => res.json(p))
    .catch(error => res.send(error));
};

exports.updateProject = (req, res) => {
  db.Project.findOneAndUpdate({ _id: req.params.pid }, req.body, { new: true })
    .then(p => res.json(p))
    .catch(error => res.send(error));
};

exports.deleteProject = (req, res) => {
  db.Project.findByIdAndRemove(req.params.pid)
    .then(() => res.json({ message: 'Project is deleted!' }))
    .catch(e => res.send(e));
};

module.exports = exports;
