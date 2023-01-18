"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var wechaty_1 = require("wechaty");
var wechaty_puppet_padlocal_1 = require("wechaty-puppet-padlocal");
var helper_1 = require("./helper");
var chatgpt_1 = require("chatgpt");
function example(text) {
    return __awaiter(this, void 0, void 0, function () {
        var api, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new chatgpt_1.ChatGPTAPIBrowser({
                        email: 'a664266460@163.com',
                        password: 'KAIwu2012'
                    });
                    return [4 /*yield*/, api.initSession()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, api.sendMessage(text)];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.response];
            }
        });
    });
}
/****************************************
 * 去掉注释，可以完全打开调试日志
 ****************************************/
// log.level("silly");
var puppet = new wechaty_puppet_padlocal_1.PuppetPadlocal({
    token: "8ac7528d268345b49a7c98e49747a34f"
});
var bot = wechaty_1.WechatyBuilder.build({
    name: "PadLocalDemo",
    puppet: puppet
})
    .on("scan", function (qrcode, status) {
    if (status === wechaty_1.ScanStatus.Waiting && qrcode) {
        var qrcodeImageUrl = [
            'https://wechaty.js.org/qrcode/',
            encodeURIComponent(qrcode),
        ].join('');
        wechaty_1.log.info(helper_1.LOGPRE, "onScan: ".concat(wechaty_1.ScanStatus[status], "(").concat(status, ")"));
        console.log("\n==================================================================");
        console.log("\n* Two ways to sign on with qr code");
        console.log("\n1. Scan following QR code:\n");
        require('qrcode-terminal').generate(qrcode, { small: true }); // show qrcode on console
        console.log("\n2. Or open the link in your browser: ".concat(qrcodeImageUrl));
        console.log("\n==================================================================\n");
    }
    else {
        wechaty_1.log.info(helper_1.LOGPRE, "onScan: ".concat(wechaty_1.ScanStatus[status], "(").concat(status, ")"));
    }
})
    .on("login", function (user) {
    wechaty_1.log.info(helper_1.LOGPRE, "".concat(user, " login"));
})
    .on("logout", function (user, reason) {
    wechaty_1.log.info(helper_1.LOGPRE, "".concat(user, " logout, reason: ").concat(reason));
})
    .on("message", function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var text, answear;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                text = message.text();
                answear = example(text);
                message.say(answear);
                wechaty_1.log.info(helper_1.LOGPRE, "on message: ".concat(message.toString()));
                return [4 /*yield*/, (0, helper_1.getMessagePayload)(message)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, helper_1.dingDongBot)(message)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .on("room-invite", function (roomInvitation) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        wechaty_1.log.info(helper_1.LOGPRE, "on room-invite: ".concat(roomInvitation));
        return [2 /*return*/];
    });
}); })
    .on("room-join", function (room, inviteeList, inviter, date) {
    wechaty_1.log.info(helper_1.LOGPRE, "on room-join, room:".concat(room, ", inviteeList:").concat(inviteeList, ", inviter:").concat(inviter, ", date:").concat(date));
})
    .on("room-leave", function (room, leaverList, remover, date) {
    wechaty_1.log.info(helper_1.LOGPRE, "on room-leave, room:".concat(room, ", leaverList:").concat(leaverList, ", remover:").concat(remover, ", date:").concat(date));
})
    .on("room-topic", function (room, newTopic, oldTopic, changer, date) {
    wechaty_1.log.info(helper_1.LOGPRE, "on room-topic, room:".concat(room, ", newTopic:").concat(newTopic, ", oldTopic:").concat(oldTopic, ", changer:").concat(changer, ", date:").concat(date));
})
    .on("friendship", function (friendship) {
    wechaty_1.log.info(helper_1.LOGPRE, "on friendship: ".concat(friendship));
})
    .on("error", function (error) {
    wechaty_1.log.error(helper_1.LOGPRE, "on error: ".concat(error));
});
bot.start().then(function () {
    wechaty_1.log.info(helper_1.LOGPRE, "started.");
});
