require("isomorphic-fetch");
const Koa = require("koa");
const next = require("next");
const dotenv = require("dotenv");
const bodyParser = require("koa-bodyparser");
const session = require("koa-session");
const Router = require("koa-router");

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3005;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, preserveLog: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(session({ sameSite: "none", secure: true }, server));
  server.use(bodyParser({ enableTypes: ["json", "text"] }));

  router.get("(.*)", async (ctx) => {
    await handle(ctx.req, ctx.res);
    // ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  // letting the server know that we want to use koa-router's routes
  server.use(router.allowedMethods());
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
