const dbRouter = require('express').Router()
const simpleQueries = require('../database/simpleQueries')
const advancedQueries = require('../database/advancedQueries')
const dropTables = require("../database/dropTables")
const createTables = require("../database/createTables")
const populateTables = require("../database/populateTables")

dbRouter.get("/simpleQueries", async (request, response) => {
    const output = await simpleQueries.executeSimpleQueries()
    return response.json(output)
})

dbRouter.get("/advancedQueries", async (request, response) => {
    const output = await advancedQueries.executeAdvancedQueries()
    return response.json(output)
})

dbRouter.delete("/dropTables", async (request, response) => {
    await dropTables.dropDBTables()
    response.status(204)
    response.end()
})

dbRouter.post("/createTables", async (request, response) => {
    await createTables.createDBTables()
    response.status(201)
    response.end()
})

dbRouter.post("/populateTables", async (request, response) => {
    await populateTables.populateDBTables()
    response.status(201)
    response.end()
})

module.exports = dbRouter;