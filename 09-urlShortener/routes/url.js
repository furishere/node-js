const express = require("express")
const { handleGeneratedNewShortUrl } = require("../controllers/url")
const router = express.Router()

router.post("/", handleGeneratedNewShortUrl)

module.exports = router