var http = require("http");
var urlencode = require("urlencode");
const cred = require("config");

var number = cred.number;
var username = cred.username;
var hash = cred.hash;

module.exports = (app) => {
  app.post("/message", (req, res) => {
    var sender = "txtlcl";
    var name = req.body.name;
    var phone = req.body.phone;
    var email = req.body.email;
    var msg = urlencode(`Name: ${name} \n Phone: ${phone} \n Email: ${email}`);
    var data =
      "username=" +
      username +
      "&hash=" +
      hash +
      "&sender=" +
      sender +
      "&numbers=" +
      number +
      "&message=" +
      msg;
    var options = {
      host: "api.textlocal.in",
      path: "/send?" + data,
    };
    callback = function (response) {
      var str = "";
      //another chunk of data has been recieved, so append it to `str`
      response.on("data", function (chunk) {
        str += chunk;
      });
      //the whole response has been recieved, so we just print it out here
      response.on("end", function () {
        console.log(str);
      });
    };
    console.log(msg);
    http.request(options, callback).end();
  });
};
