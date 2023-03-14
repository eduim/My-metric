import express from "express";
import cors from "cors";
import router from "./router.js";
import ErrorHandler from "../lib/errorHandler.js";

function startServer() {
  const PORT = process.env.PORT || 8080;

  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(router);
  app.use(ErrorHandler);

  return new Promise((resolve) => {
    const server = app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
      resolve(server);
    });
  });
}

export default startServer;
