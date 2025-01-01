import type { RequestHandler } from "express";
// Load environment variables from .env file
import "dotenv/config";

// @@ -10,21 +9,27 @@ import "../database/checkConnection";
// Import the Express application from ./app
import app from "./app";

/* ************************************************************************* */

// Declaration of a "Welcome" route

const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};

app.get("/", sayWelcome);
/* ************************************************************************* */
// Get the port from the environment variables
const port = process.env.APP_PORT;
// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
