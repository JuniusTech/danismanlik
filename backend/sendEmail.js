const nodemailer = require("nodemailer");

module.exports = async (userEmail, subject, htmlTemplate) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
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
