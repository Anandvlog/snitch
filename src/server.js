import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import app from "./app/app.js";
import { connectDB } from "./config/db.js";

await connectDB();

app.listen(3000, () => {
  console.log("Server connect successfully");
});
