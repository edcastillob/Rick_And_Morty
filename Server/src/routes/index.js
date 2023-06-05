const { getCharById } = require("../controllers/getCharById.js");
const { postFav, deleteFav } = require("../controllers/handleFavorites.js");
const { login } = require("../controllers/login.js");
const router = require('express').Router();

router.use('/character/:id', getCharById)
