const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},
});

// Function to send verification email
async function sendVerificationEmail(email, otp) {
	try {
		const mailResponse = await mailSender(
			email,
			"Verification Email",
			emailTemplate(otp)
		);
		console.log("Email sent successfully:", mailResponse.response);
	} catch (error) {
		console.error("Error occurred while sending email:", error.message || error);
		throw error;
	}
}

// Post-save hook to send an email after the document has been saved
OTPSchema.pre("save", async function (next) {
	console.log("New document saved to database");

	if (this.isNew) {
		try {
			await sendVerificationEmail(this.email, this.otp);
		} catch (error) {
			console.error("Failed to send verification email:", error.message || error);
			// Decide how to handle this situation: retry, log, or even prevent saving.
		}
	}
	next();
});

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;
