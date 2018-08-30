const Koa = require('koa');
const Router = require('koa-router');
const log = require('./log');

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'ok\n';
});

app.use(router.routes());

const server = app.listen(3000, () => {
  log.info('Listening on port 3000');
});

process.on('SIGTERM', function () {
  server.close(function () {
    log.info('Shut down gracefully');
    process.exit(0);
  });
});
