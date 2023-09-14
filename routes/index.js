const express = require('express')
const router = express.Router();

const { createPerson, createPersonFromParams } = require('../controllers/createPerson')
const { getPersonById, getAllPeople } = require('../controllers/getPerson');
const { updatePersonById } = require('../controllers/updatePerson');
const { deletePersonById } = require('../controllers/deletePerson');

const { noIdInPath } = require('../controllers/noId')

router.route('/')
    .post(createPerson)
    .get(getAllPeople)
    .put(noIdInPath)
    .delete(noIdInPath)


router.route('/:user_id')
    .get(getPersonById)
    .put(updatePersonById)
    .delete(deletePersonById)

router.route('/:name')
    .post(createPersonFromParams)


module.exports = router
