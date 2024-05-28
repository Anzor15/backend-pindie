const sendAllCategories = require("./categories")
const sendAllGames = require("./games")
const sendAllUsers = require("./users")

const sendCategoryCreated = require("./categories")
const sendGameCreated = require("./games")
const sendUserCreated = require("./users")

const sendCategoryById = require("./categories")
const sendGameById = require("./games")
const sendUserById = require("./users")

const sendCategoryUpdated = require("./categories")
const sendGameUpdated= require("./games")
const sendUserUpdated = require("./users")

const sendCategoryDeleted = require("./categories")
const sendGameDeleted = require("./games")
const sendUserDeleted = require("./users")

module.exports = {
    sendAllCategories,
    sendAllGames,
    sendAllUsers,
    sendCategoryCreated,
    sendGameCreated,
    sendUserCreated,
    sendCategoryById,
    sendGameById,
    sendUserById,
    sendCategoryUpdated,
    sendGameUpdated,
    sendUserUpdated,
    sendCategoryDeleted,
    sendGameDeleted,
    sendUserDeleted
}