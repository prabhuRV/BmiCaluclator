require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./Configuration/config");
const userController = require("./Routes/user.routes");
const authentication = require("./Middleware/authentication");
const bmiController = require("./Routes/bmiCaluclator.routes");
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("Well come to home");
});
app.use("/user", userController);

app.use(authentication)
app.use("/bmi", bmiController);

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("db connected");
  } catch (error) {
    console.log("error in connecting db");
    console.log(error);
  }
});

// Task -1 ( User BMI Calculation system )
// As a user i need to login to the account and able to calculate the BMI value with the given height and weight.
// FLOW
// 1) Need to have register api . So, that user can register his details and login from next time. ( registration values name, email, password)
// 2) Need to have login api . Inputs email and password.
// 3) Need to have getProfile api to get his own details
// 4) Need to have calculateBMI api . Inputs height (feet) and weigh(kgs) . Output BMI value
//   formula: weight (kg) / [height (m)]2
// 5) Need to have getCalculation Hestory to get previous calculated BMI data
// 6) Need to have logout api to get out of the operations
// You can use the .json files or .txt for storing the data or you can use any database to store the user data and hestory data
// BONUS
// 1) If you use the any database
// 2) If you use token and middleware for authontication process
// 3) If you can document the steps to run the code
