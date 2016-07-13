var userAgent = new require('../');
var Koa = require('koa');
var request = new require('supertest');

exports['koa'] = function(test) {
  var app = new Koa();

  app.use(userAgent());

  app.use(function (ctx, next) {
    test.ok(ctx.state.userAgent, Object);
    return next();
  });

  request(app.listen()).get('/').end(function() {
    test.done();

    setTimeout(function() {
      process.exit();
    });
  });
};
