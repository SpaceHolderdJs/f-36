import express from "express";
import cors from "cors";
import { postsRouter } from "./posts/posts.js";

const server = express();

const PORT = 3000;

server.use(cors());

server.use(express.json());

server.use("/posts", postsRouter);
// підключити роутер

server.get("/", (request, response) => {
  return response.status(200).send({ msg: "Hello from express server" });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
