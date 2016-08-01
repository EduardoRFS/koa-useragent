'use strict';
const uaParser = require('ua-parser');

module.exports = function() {
  return function (ctx, next) {
    let source =  ctx.request.headers['user-agent'] || '';

    ctx.state.userAgent = uaParser.parse(source);

    return next();
  };
};
