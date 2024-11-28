const getAllUsers = async (req, res) => {
  res.status(200).json({ id: 1, name: "I am getAllUsers" });
};

const getAllUsersTesting = async (req, res) => {
  res.status(200).json({ id: 2, name: "I am getAllUsersTesting" });
};

module.exports = { getAllUsers, getAllUsersTesting };
