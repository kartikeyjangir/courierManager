import Staff from "../models/staff.js";

export const getverifed = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await Staff.findOne({ email, password });
    console.log(user);
    if (user) {
      res.status(200).json({ ...user, found: true });
    } else {
      res.status(200).json({ found: false });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
