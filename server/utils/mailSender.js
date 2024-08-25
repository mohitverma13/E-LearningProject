const nodemailer = require("nodemailer");
const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        let info = await transporter.sendMail({
            from: 'StudyNotion || By Mohit Kumar <no-reply@studynotion.com>', // It’s a good practice to include a "no-reply" address
            to: email,
            subject: title,
            html: body,
        });

        console.log("Email sent successfully:", info.response);
        return info;
    } catch (error) {
        console.error("Error occurred while sending email:", error.message || error);
        throw error;
    }
};

module.exports = mailSender;
