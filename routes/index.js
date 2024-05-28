const categoriesRouter  = require("./categories")
const gamesRouter= require("./games")
const usersRouter  = require("./users")
const apiRouter = require("./apiRouter")
const authRouter = require("./auth")
const pagesRouter = require("./pages")
module.exports = {
    categoriesRouter,
    gamesRouter,
    usersRouter,
    apiRouter,
    authRouter,
    pagesRouter
}