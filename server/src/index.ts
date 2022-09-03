import "reflect-metadata";
import { app } from "./app";
import { createServer } from "./apollo/server";

const startServer = async () => {
  const server = await createServer();

  await server.start();

  server.applyMiddleware({
    app,
    cors: { credentials: true, origin: ["https://studio.apollographql.com"] },
  });

  const PORT = process.env.PORT || 9000;

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
