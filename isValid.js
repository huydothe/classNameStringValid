"use strict";
exports.__esModule = true;
var demo_1 = require("./demo");
var emailValid = new demo_1.EmailValid();
var valid = ["C0318G", "P5418H"];
var invalid = ['M0318G', 'P0323A'];
for (var _i = 0, valid_1 = valid; _i < valid_1.length; _i++) {
    var email = valid_1[_i];
    var isValid = emailValid.EmailValid(email);
    console.log("Email : ".concat(email, "  is valid : ").concat(isValid));
}
for (var _a = 0, invalid_1 = invalid; _a < invalid_1.length; _a++) {
    var email = invalid_1[_a];
    var isValid = emailValid.EmailValid(email);
    console.log("Email : ".concat(email, "  is valid : ").concat(isValid));
}
