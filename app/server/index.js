const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit-form", async (req, res) => {
  try {
    const response = await fetch(process.env.FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    if (response.ok) {
      res.status(200).json({ message: "Form submitted successfully" });
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Form submission failed" });
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on port ${process.env.PORT || 3001}`);
});
