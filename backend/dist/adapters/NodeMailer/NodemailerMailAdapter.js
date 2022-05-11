"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = exports.transport = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.transport = nodemailer_1.default.createTransport({
    host: process.env.MAIL_HOST,
    port: 2525,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await exports.transport.sendMail({
            from: `Equipe  Feedget <${process.env.MAIL_FROM_ADDRESS}>`,
            to: 'Raycon Lima <rayconlimabatista@gmail.com>',
            subject,
            html: body
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
