const express = require("express");

const router = express.Router();

const { getUsers  , apiFive ,  apiFour , apiThree , apiTwo, apiOne} = require("../task controller/TaskController");

router.get("/",getUsers);
router.get("/api1", apiOne);
router.get("/api2", apiTwo);
router.get("/api3", apiThree);
router.get("/api4", apiFour);
router.get("/api5", apiFive);


module.exports = router;