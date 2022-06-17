import LoginRoute from "./routes/login";
import DataRoute from "./routes/data";

import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/login", LoginRoute);
app.use("/data", DataRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
