import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);
// app.register(cors, {
//origin: ['localhost:3000']});
//utilizando origin posso determinar quais app front-end podem acessar este back

app.get("/hello", async () => {
  const habito = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Fazer",
      },
    },
  });
  return habito;
});

app.listen({
  port: 3333,
});
