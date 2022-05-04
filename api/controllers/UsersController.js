/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var swig = require('swig');
var path = require('path');


module.exports = {
    inscription: (req, res) => {
        var tpl = swig.compileFile(path.join(__dirname + "/../../assets/templates/verification_email.html"));

        console.log(tpl({ parentName: "Imdad Adelabou" }));
        console.log(req.body.firstname);
        return res.json({ "msg": "New User" });
    }
};