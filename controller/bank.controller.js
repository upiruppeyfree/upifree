const dotenv = require("dotenv");
const { UpiModel } = require("../Model/upi.model");
const MobileModel = require("../Model/mobile.model");
dotenv.config();

// Mobile
const MobileNumber = async (req, res) => {
    const { mobilenumber } = req.body;

    if (!mobilenumber) {
        return res.status(400).send({ message: "Please fill your mobile number" });
    }

    try {
        // Check if the mobile number already exists
        const isExistUser = await MobileModel.findOne({ mobilenumber });
        if (isExistUser) {
            return res.status(400).send({ message: "Mobile number already exists. Please enter a new number." });
        }

        // Create a new mobile number entry
        const newMobile = await MobileModel.create({ mobilenumber });

        // Emit the new data to all connected clients
        req.app.get("io").emit("updateData", newMobile);

        res.status(201).send({ message: "Mobile number added successfully", data: newMobile });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
};

// UPI ID
const UpiId = async (req, res) => {
    const { upiId } = req.body;

    if (!upiId) {
        return res.status(400).send({ message: "Please fill your UPI ID" });
    }

    try {
        // Check if the UPI ID already exists
        const isExistUser = await UpiModel.findOne({ upiId });
        if (isExistUser) {
            return res.status(400).send({ message: "UPI account already exists. Please enter a new account." });
        }

        // Create a new UPI ID entry
        const newUpi = await UpiModel.create({ upiId });

        // Emit the new data to all connected clients
        req.app.get("io").emit("updateData", newUpi);

        res.status(201).send({ message: "UPI ID added successfully", data: newUpi });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
};

module.exports = { UpiId, MobileNumber };
