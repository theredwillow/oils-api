var express = require("express");
var router = express.Router();
const ensureAuthenticated = require("../../auth.js").ensureAuthenticated;
const User = require("../../models/user");

router.all("*", ensureAuthenticated);

/* GET users listing. */
router.get("/", function (req, res, next) {
  User.findById({
    where: { id: req.user.id },
  })
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
