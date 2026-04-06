
// Create Server
const express = require("express");
const value = 3000;
const app = express();
app.listen(value, () => { console.log(`Server is listening on port ${value}`) }
);

const fs = require("fs");
// const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const { use } = require("react");



// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017")
.then(()=>{console.log("Connected successfully!")})
.catch((err)=>{console.log(err)});

// Create Schema (Design or Structure)
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  }
});

const user = mongoose.model("user", userSchema);

// middleware
app.use(express.urlencoded({extended: false}));
// app.use(express.json());   (another)

// User Post (Create)
app.post("/userpost", async (req, res) => {
  // const { firstName, lastName, email, gender, password } = req.body;
  const body = req.body;
  if (!body) {
    return res.status(404).json({msg: "Data not found!"})
  }
  
  const result = await user.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    password: body.password
  });

  console.log(result);
  return res.status(200).json({msg: "Data is uploaded"});
});

// Dashboard
app.get("/home", async (req, res) => {
  const result = await user.find({});
  res.end(`
    <html>
    <head><title>document</title></head>
    <body>
      <ul>
        ${result.map(user => `<li>${user.firstName}</li>`).join("")}
      </ul>
    </body>
    </html>
  `)
})

// Find a User
app.patch("/finduser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { firstName, lastName, email } = req.body;

    const result = await user.findByIdAndUpdate(
      id,
      { firstName, lastName, email },
      { new: true } // returns updated document
    );

    if (!result) {
      return res.status(404).json({ msg: "User not found!" });
    }

    return res.status(200).json({ msg: "Data changed!", updatedUser: result });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});