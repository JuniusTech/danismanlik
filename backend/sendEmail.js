const nodemailer = require("nodemailer");

module.exports = async (userEmail, subject, htmlTemplate) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        // user: process.env.EMAIL,
        // pass: process.env.PASSWORD,
        user: "df941bc2eb0b92",
        pass: "6643ef199994ba",
      },
    });

    const mailOptions = {
      // from: process.env.EMAIL,
      from: "df941bc2eb0b92",
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
