import app from "./src/app";
import { config } from "./src/config/config";
import connectToDb from "./src/config/db";

const startServer = async () => {
  // connecting to db
  await connectToDb();

  const PORT = config.port || 3000;

  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
};

startServer();
