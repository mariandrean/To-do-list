import TaskModel from "../models/TaskModel.js"

export const getTasks = async (request, response) => {
    try {
        const tasks = await TaskModel.findAll();
        response.status(200).json(tasks);
    }
    catch (error) {
        response.status(500).json({ message: error.message })
    }
}

export const createTask = async (request, response) => {
    try {
        const newTask = await TaskModel.create(request.body);
        response.status(201).json(newTask);
    }
    catch (error) {
        response.status(500).json({ message: error.message })
    }
}

export const deleteTask = async (request, response) => {
    try {
        const task = await TaskModel.findOne({where: {id: request.params.id}})
        await TaskModel.destroy({where: {id: request.params.id}});
        response.status(200).json(task);
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}