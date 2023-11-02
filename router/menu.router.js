const express = require("express")
const MenuController = require("../controllers/menu.controller")
const md_auth = require("../middlewares/authanticated")

const api = express.Router()

api.post("/menu", [md_auth.asureAuth], MenuController.createMenu)
api.get("/menu", MenuController.getMenus)
api.patch("/menu/:id", [md_auth.asureAuth], MenuController.updateMenu)
api.delete("/menu/:id", [md_auth.asureAuth], MenuController.deleteMenu)
//EndPoints

module.exports = api 