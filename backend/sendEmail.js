const nodemailer = require("nodemailer");

module.exports = async (userEmail, subject, htmlTemplate) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: subject,
      html: htmlTemplate,
    };
    const info = await transporter.sendMail(mailOptions);
    // console.log("Emai Sent:" + info.response);
  } catch (error) {
    console.log(error);
  }
};
