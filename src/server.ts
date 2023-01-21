import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
// app.register(cors, {
//origin: ['localhost:3000']});
//utilizando origin posso determinar quais app front-end podem acessar este back
app.register(appRoutes);

app.listen({
  port: 3333,
});
