'use strict';
const parser = require('ua-parser-js');

module.exports = function() {
  return function (ctx, next) {
    let source =  ctx.request.headers['user-agent'] || '';

    ctx.state.userAgent = parser(source);

    return next();
  };
};
