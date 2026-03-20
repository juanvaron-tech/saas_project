import Fastify from 'fastify';

const app = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: { colorize: true },
    },
  },
});

// ─── Health Check ────────────────────────────────────────────────────────────
app.get('/health', async (_request, reply) => {
  return reply.status(200).send({
    data: { status: 'ok', timestamp: new Date().toISOString() },
    error: null,
    meta: {},
  });
});

// ─── Bootstrap ───────────────────────────────────────────────────────────────
const start = async (): Promise<void> => {
  try {
    const PORT = Number(process.env.PORT) || 3001;
    const HOST = process.env.HOST ?? '0.0.0.0';

    await app.listen({ port: PORT, host: HOST });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

export { app };
