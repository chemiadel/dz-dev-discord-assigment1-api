import LoginRoute from "./routes/login";
import DataRoute from "./routes/data";

import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/login", LoginRoute);
app.use("/data", DataRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
