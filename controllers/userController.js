const express = require("express")
const userController = express.Router()
const { getAllUsers } = require("../queries/users")

userController.get("/", async (req, res) => {
    const allUsers = await getAllUsers()

    if (allUsers) {
        res.json(allUsers)
    } else {
        res.status(404).json({error : "Not found"})
    }
})


module.exports = userController;

