import express from "express";
import holidaysRoute from "./routes/holidays.js";
import countriesRoute from "./routes/countries.js";
import { port } from "./config/config.js";

const app = express();

app.use(express.json());

app.get("/test-server", async (req, res) => {
  res.json("Server is running");
});

app.use("/api/holidays", holidaysRoute);
app.use("/api/countries", countriesRoute);

// Export the server for testing
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default server;
