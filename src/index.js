import app from "./app.js";
import { PORT } from "./config/server.config.js";
import connectDB from "./config/db.js";

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();