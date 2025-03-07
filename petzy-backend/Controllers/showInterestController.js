import PetInterest from "../models/PetInterest.js";

export async function showInterest(req, res) {
  try {
    const { petId, email, phone, livingSituation, experience, otherPets } = req.body;

    // Create a new interest entry
    const newInterest = new PetInterest({
      petId,
      email,
      phone,
      livingSituation,
      experience,
      otherPets,
    });

    // Save to database
    await newInterest.save();

    res.status(201).json({ message: "Interest recorded successfully." });
  } catch (error) {
    console.error("Error saving interest:", error);
    res.status(500).json({ message: "Error saving interest." });
  }
}
