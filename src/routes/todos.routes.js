const { Router } = require("express");
const router = Router();
const Todos = require("../models/todos.models");

router.get('/api/v1/todos', async (req, res) => {
    try {
        const Tasks = await Todos.findAll({
            attributes: ['id', 'title', 'description', 'status']
        })
        res.json(Tasks)
    } catch (error) {
        res.status(400).json(error)
    }
});

router.post('/api/v1/todos', async (req, res) => {
    try {
        const newTasks = req.body;
        const result = await Todos.create(newTasks)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
});
router.put('/api/v1/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const dataTask = req.body;
        await Todos.update(dataTask, {
            where: { id }
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }

})

router.delete('/api/v1/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Todos.destroy({
            where: { id }
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;