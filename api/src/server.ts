import cors from "cors";
import express, { Request, Response } from "express";
import { HelloResponse } from "./types";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (_req: Request, res: Response<HelloResponse>) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
