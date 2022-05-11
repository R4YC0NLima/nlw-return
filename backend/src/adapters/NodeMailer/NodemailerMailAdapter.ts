import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../MailAdapter";

export const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 2525,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
        from: `Equipe  Feedget <${process.env.MAIL_FROM_ADDRESS}>`,
        to: 'Raycon Lima <rayconlimabatista@gmail.com>',
        subject,
        html: body
    });
    }
}