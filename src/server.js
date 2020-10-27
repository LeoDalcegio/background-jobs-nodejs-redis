import "dotenv/config";
import express from "express";
import BullBoard from "bull-board";

import UserController from "./controllers/UserController";
import Queue from "./lib/Queue";

const PORT = process.env.PORT || 8080;

const app = express();
BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

app.use(express.json());

app.post("/users", UserController.store);

app.use("/admin/queues", BullBoard.UI);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
