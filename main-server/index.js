import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import { User } from "./models/User.js";
import { createWallet } from "arweavekit/wallet";
import sss, { combine } from "shamirs-secret-sharing-ts";
import axios from "axios";

configDotenv();

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());

app.post("/get-new-wallet", async (req, res) => {
  const {
    body: { email },
  } = req;

  const wallet = await createWallet({
    seedPhrase: false,
    environment: "mainnet",
  });

  const secret = JSON.stringify(wallet.key);
  const shares = sss.split(secret, { shares: 3, threshold: 2 });

  try {
    const newUser = await User.create({
      walletAddress: wallet.walletAddress,
      keyPart: shares[1],
      email,
    });
    newUser.save();

    const data = {
      walletAddress: wallet.walletAddress,
      keyPart: shares[2],
      email: email,
    };

    await axios.post("http://localhost:3001/save-recovery-key-part", data);

    return res.status(200).send({ KeyPart0: shares[0] });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

app.get("/get-key-part/:email", async (req, res) => {
  const {
    params: { email },
  } = req;

  if (!email) {
    return res.send(403).send({ msg: "No Email Provided" });
  }

  const user = await User.findOne({ email: email });

  if (user) {
    return res.status(200).send({ keyPart: user.keyPart });
  }

  return res.status(404).send({ msg: "User not found" });
});

app.post("/recover-key-value-pair", async (req, res) => {
  const {
    body: { keyPart, email },
  } = req;

  const keyPartArray = Object.keys(keyPart).map((key) => keyPart[key]);
  const keyPartUint8Array = new Uint8Array(keyPartArray);

  const user = await User.findOne({ email: email });

  const recoveredKeyValuePairBuffer = combine([
    Buffer.from(keyPartUint8Array),
    user.keyPart,
  ]);
  const recoveredKeyValuePairString =
    recoveredKeyValuePairBuffer.toString("utf-8");
  const recoveredKeyValuePair = JSON.parse(recoveredKeyValuePairString);

  res.status(200).send(recoveredKeyValuePair);
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
