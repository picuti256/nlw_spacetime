import fastify from "fastify";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";
const app = fastify();

app.register(cors, {
  origin: true, // ["http://localhost:3333"], todas URLs de front-end poderão acessar nosso back-end(Ajustar depois para o vercel quando colocar em produção.)
});
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })

  .then(() => {
    console.log("✌ HTTP server running http://localhost:3333");
  });
