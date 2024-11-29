const { Query } = require("mongoose");
const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const { name, email, sort, select } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: "i" }; //Using regex we can implement various filters
  }

  if (email) {
    queryObject.email = { $regex: email, $options: "i" }; //Selecting i as an option will make the queries case insensitive and partial parameters will be accpeted
  }

  let apiData = User.find(queryObject);

  if (sort) {
    sortType = sort.split(",").join(" "); //split and join are used because queries are separated by commas and in sort and select no commas
    apiData = apiData.sort(sortType); //To add the sort functionality use .sort() function
  }

  if (select) {
    selectType = select.split(",").join(" ");
    apiData = apiData.select(selectType); //To select which field to be shown in the api
  }

  const limit = req.query.limit || 5;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit; //Page offset by 1

  apiData.limit(limit); //Limits the number of documnets shown on a single page
  apiData.skip(skip); //Skips the specific documents

  const usersData = await apiData;

  const totalDocuments = await User.countDocuments(); //Gives the total documents in the collectiuon
  const totalPages = Math.ceil(totalDocuments / limit); //Count total pages with given limit

  res.status(200).json({
    currentPage: page,
    totalPages,
    currentItems: usersData.length,
    totalItems: totalDocuments,
    data: usersData,
  });
};

const getAllUsersTesting = async (req, res) => {
  const queryObject = req.query;

  const usersData = await User.find(queryObject);
  res.status(200).json(usersData);
};

module.exports = { getAllUsers, getAllUsersTesting };
