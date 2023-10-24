import express, { Request, Response } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use("/user", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to DIO Bank API" });
});

router.get("*", (req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
