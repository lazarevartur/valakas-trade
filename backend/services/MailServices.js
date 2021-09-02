import nodemailer from "nodemailer";
class MailServices {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  sendContactMassage = async (data) => {
    const { email, name, message } = data;
    await this.transporter.sendMail({
      from: `Mirax.tech <${process.env.SMTP_USER}>`,
      to: process.env.CLIENT_EMAIL,
      subject: `Mirax Контакты:: email: ${email}, имя: ${name}`,
      text: "",
      html: `
        <div>
          <h4>Сообщение от кого: ${email}</h4>
          <h4>Имя: ${name}</h4>
          <p>${message}</p>
        </div>
        `,
    });
  };
}

export default new MailServices();
