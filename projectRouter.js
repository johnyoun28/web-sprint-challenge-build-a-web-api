const router = require('express').Router()
const Project = require('./data/helpers/projectModel')

router.get('/', (req, res) => {
    Project.get()
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(`${err}`))
})

router.get('/:id', (req, res) => {
    Project.get(req.params.id)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(`${err}`))
})

router.get('/:id/actions', (req, res) => {
    Project.getProjectActions(req.params.id)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(`${err}`))
})

router.delete('/:id', (req, res) => {
    Project.remove(req.params.id)
    .then(() => res.status(200).json({ message: `project ${req.params.id} deleted!`}))
    .catch(err => res.status(500).json(`${err}`))
})

router.put('/:id', (req, res) => {
    Project.update(req.params.id, req.body)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(`${err}`))
})

router.post('/', (req, res) => {
    const newProject = {...req.body  }
    Project.insert(newProject)
    .then(project => res.status(201).json(project))
    .catch(err => res.status(200).json(`${err}`))
})


module.exports = router