import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    application: "HHI-SA Operations Platform",
    version: "1.0.0",
    status: "Server Running"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`HHI-SA Server is running on http://localhost:${PORT}`);
});  