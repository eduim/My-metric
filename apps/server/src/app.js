import express from "express";

function startServer() {
  const PORT = process.env.SERVER_PORT || 8080;

  const app = express();
  // app.use(express.json());
  // app.use(cors());
  // app.use(router);

  return new Promise((resolve) => {
    const server = app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
      resolve(server);
    });
  });
}

export default startServer;
