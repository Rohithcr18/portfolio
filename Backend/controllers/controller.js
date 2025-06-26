import models from "../models/models";

const contactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    return res.status(200).json({ message: "Message received! Thank you for contacting." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
};

models.exports = { contactForm };
