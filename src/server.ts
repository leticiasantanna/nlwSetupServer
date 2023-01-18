import Fastify from "fastify";

const app = Fastify();

app.get("/", () => {
  return "Eawwwwwww";
});

app.listen({
  port: 3333,
});
