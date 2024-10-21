import morgan from 'morgan';
import pkg from 'winston';
const { info } = pkg;

const morganMiddleware = morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
  ].join(' ');
}, { stream: { write: message => info(message.trim()) }});

export default morganMiddleware;
