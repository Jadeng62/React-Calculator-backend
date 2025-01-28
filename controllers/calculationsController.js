const express = require('express')
const calculationsController = express.Router()
const { getAllCalculations, oneCalculation, createCalculation } = require("../queries/calculation");


calculationsController.get("/:id", async (req, res) => {
    const { id } = req.params;
    const equation = await oneCalculation(id);
    if (equation) {
        res.json(equation)
    } else {
        res.status(404).json({error : "Not Found"})
    }
})

calculationsController.get("/", async (req, res) => {
    const allEquations = await getAllCalculations();
    if (allEquations) {
        res.json(allEquations)
    } else {
        res.status(404).json({error : "Not found"})
    }
})

calculationsController.post("/", async (req, res) => {
    try {
        const savedEquation = await createCalculation()
        res.json(savedEquation)
    } catch (err) {
        res.status(404).json({error : "Error with save",err})
    }
})

module.exports = calculationsController