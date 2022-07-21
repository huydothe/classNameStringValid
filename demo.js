"use strict";
exports.__esModule = true;
exports.EmailValid = void 0;
var EmailValid = /** @class */ (function () {
    function EmailValid() {
        this.email = /^[CAP]{1}\d+[GHIKLM]$/;
    }
    EmailValid.prototype.EmailValid = function (email) {
        return this.email.test(email);
    };
    return EmailValid;
}());
exports.EmailValid = EmailValid;
