import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async () => {
  return { hello: "test" };
});

const start = async () => {
  try {
    await fastify.listen({ port: Number(process.env.PORT) });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
