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
exports.dingDongBot = exports.getMessagePayload = exports.LOGPRE = void 0;
var wechaty_1 = require("wechaty");
var PUPPET = require("wechaty-puppet");
exports.LOGPRE = "[PadLocalDemo]";
function getMessagePayload(message) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, attachFile, dataBuffer, videoFile, videoData, emotionFile, emotionJSON, emotionBuffer, messageImage, thumbImage, thumbImageData, hdImage, hdImageData, artworkImage, artworkImageData, urlLink, urlThumbImage, urlThumbImageData, miniProgram;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = message.type();
                    switch (_a) {
                        case PUPPET.types.Message.Text: return [3 /*break*/, 1];
                        case PUPPET.types.Message.Attachment: return [3 /*break*/, 2];
                        case PUPPET.types.Message.Audio: return [3 /*break*/, 2];
                        case PUPPET.types.Message.Video: return [3 /*break*/, 5];
                        case PUPPET.types.Message.Emoticon: return [3 /*break*/, 8];
                        case PUPPET.types.Message.Image: return [3 /*break*/, 11];
                        case PUPPET.types.Message.Url: return [3 /*break*/, 19];
                        case PUPPET.types.Message.MiniProgram: return [3 /*break*/, 23];
                    }
                    return [3 /*break*/, 25];
                case 1:
                    wechaty_1.log.silly(exports.LOGPRE, "get message text: ".concat(message.text()));
                    return [3 /*break*/, 25];
                case 2: return [4 /*yield*/, message.toFileBox()];
                case 3:
                    attachFile = _b.sent();
                    return [4 /*yield*/, attachFile.toBuffer()];
                case 4:
                    dataBuffer = _b.sent();
                    wechaty_1.log.info(exports.LOGPRE, "get message audio or attach: ".concat(dataBuffer.length));
                    return [3 /*break*/, 25];
                case 5: return [4 /*yield*/, message.toFileBox()];
                case 6:
                    videoFile = _b.sent();
                    return [4 /*yield*/, videoFile.toBuffer()];
                case 7:
                    videoData = _b.sent();
                    wechaty_1.log.info(exports.LOGPRE, "get message video: ".concat(videoData.length));
                    return [3 /*break*/, 25];
                case 8: return [4 /*yield*/, message.toFileBox()];
                case 9:
                    emotionFile = _b.sent();
                    emotionJSON = emotionFile.toJSON();
                    wechaty_1.log.info(exports.LOGPRE, "get message emotion json: ".concat(JSON.stringify(emotionJSON)));
                    return [4 /*yield*/, emotionFile.toBuffer()];
                case 10:
                    emotionBuffer = _b.sent();
                    wechaty_1.log.info(exports.LOGPRE, "get message emotion: ".concat(emotionBuffer.length));
                    return [3 /*break*/, 25];
                case 11: return [4 /*yield*/, message.toImage()];
                case 12:
                    messageImage = _b.sent();
                    return [4 /*yield*/, messageImage.thumbnail()];
                case 13:
                    thumbImage = _b.sent();
                    return [4 /*yield*/, thumbImage.toBuffer()];
                case 14:
                    thumbImageData = _b.sent();
                    wechaty_1.log.info(exports.LOGPRE, "get message image, thumb: ".concat(thumbImageData.length));
                    return [4 /*yield*/, messageImage.hd()];
                case 15:
                    hdImage = _b.sent();
                    return [4 /*yield*/, hdImage.toBuffer()];
                case 16:
                    hdImageData = _b.sent();
                    wechaty_1.log.info(exports.LOGPRE, "get message image, hd: ".concat(hdImageData.length));
                    return [4 /*yield*/, messageImage.artwork()];
                case 17:
                    artworkImage = _b.sent();
                    return [4 /*yield*/, artworkImage.toBuffer()];
                case 18:
                    artworkImageData = _b.sent();
                    wechaty_1.log.info(exports.LOGPRE, "get message image, artwork: ".concat(artworkImageData.length));
                    return [3 /*break*/, 25];
                case 19: return [4 /*yield*/, message.toUrlLink()];
                case 20:
                    urlLink = _b.sent();
                    wechaty_1.log.info(exports.LOGPRE, "get message url: ".concat(JSON.stringify(urlLink)));
                    return [4 /*yield*/, message.toFileBox()];
                case 21:
                    urlThumbImage = _b.sent();
                    return [4 /*yield*/, urlThumbImage.toBuffer()];
                case 22:
                    urlThumbImageData = _b.sent();
                    wechaty_1.log.info(exports.LOGPRE, "get message url thumb: ".concat(urlThumbImageData.length));
                    return [3 /*break*/, 25];
                case 23: return [4 /*yield*/, message.toMiniProgram()];
                case 24:
                    miniProgram = _b.sent();
                    wechaty_1.log.info(exports.LOGPRE, "MiniProgramPayload: ".concat(JSON.stringify(miniProgram)));
                    return [3 /*break*/, 25];
                case 25: return [2 /*return*/];
            }
        });
    });
}
exports.getMessagePayload = getMessagePayload;
function dingDongBot(message) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(((_a = message.to()) === null || _a === void 0 ? void 0 : _a.self()) && message.text().indexOf("ding") !== -1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, message.talker().say(message.text().replace("ding", "dong"))];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
exports.dingDongBot = dingDongBot;
