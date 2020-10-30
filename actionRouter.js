const router = require('express').Router()
const Action = require('./data/helpers/actionModel')

router.get('/', (req, res) => {
    Action.get()
    .then(action => res.status(200).json(action))
    .catch(err => res.status(500).json(`${err}`))
})

router.get('/:id', (req, res) => {
    Action.get(req.params.id)
    .then(action => res.status(200).json(action))
    .catch(err => res.status(500).json(`${err}`))
})

router.delete('/:id', (req, res) => {
    Action.remove(req.params.id)
    .then(() => res.status(200).json({ message: `action ${req.params.id} deleted!`}))
    .catch(err => res.status(500).json(`${err}`))
})

router.put('/:id', (req, res) => {
    Action.update(req.params.id, req.body)
    .then(action => res.status(200).json(action))
    .catch(err => res.status(500).json(`${err}`))
})

router.post('/', (req, res) => {
    const newAction = {project_id: req.params.id, ...req.body  }
    Action.insert(newAction)
    .then(action => res.status(201).json(action))
    .catch(err => res.status(200).json(`${err}`))
})


module.exports = router