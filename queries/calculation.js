const db = require("../db/dbConfig")

const createCalculation = async () => {
    try {
        const query = "INSERT INTO calculations (calculation, result) VALUES($1, $2) RETURNING *"
        const newCalculation = await db.one(query)
        return newCalculation
    } catch (err) {
        return ("Error with creating new calculation;", err)
    }
}

const getAllCalculations = async () => {
    try {
        const query = "SELECT * FROM calculations;"
    const allCalculations = await db.one(query)
    return allCalculations
  } catch (err) {
    return ("Error with fetching all Calculations", err)
  }
} 

const oneCalculation = async () => {
    try {
        const query = "SELECT * WHERE id=$1;"
        const oneCalculation = await db.one(query, id)
        return oneCalculation
    } catch (err) {
        return Error(`Error with fetching all ${err}`)
    }
}


module.exports = {
    getAllCalculations,
    oneCalculation,
    createCalculation,
}