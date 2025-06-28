const express = require('express');
const router = express.Router();
const saveController = require('./controller');

router.post('/', saveController.createSave);
router.get('/', saveController.getSaves);
router.get('/email/:autor', saveController.getSaveByEmail);
//router.get('/:id', saveController.getSaveById);
router.put('/:id', saveController.updateSave);
router.delete('/:id', saveController.deleteSave);

module.exports = router;
