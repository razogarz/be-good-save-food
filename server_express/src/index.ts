import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import recipes from "../routes/recipes";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/recipes", recipes);

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});