import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import { User } from "./models/User.js";

configDotenv();

const app = express();
const port = process.env.port || 3001;

app.use(cors());
app.use(express.json());

app.post("/save-recovery-key-part", async (req, res) => {
  const {
    body: { walletAddress, keyPart, email },
  } = req;

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).send({ msg: "User already exists" });
  }

  try {
    const newUser = await User.create({ walletAddress, keyPart, email });
    newUser.save();
    return res.status(201).send({ msg: "Key Part Saved Successfully" });
  } catch (error) {
    return res.sendStatus(500);
  }
});

app.get("/get-recovery-key-part/:email", async (req, res) => {
  const {
    params: { email },
  } = req;

  if (!email) {
    return res.send(403).send({ msg: "No Wallet Address Provided" });
  }

  const user = await User.findOne({ email: email });

  if (user) {
    return res.status(200).send({ keyPart: user.keyPart });
  }

  return res.status(404).send({ msg: "Wallet Address not found" });
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is listening on PORT: ${port}`);
    });
  })
  .catch((error) => console.log(error));
