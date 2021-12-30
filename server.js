// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require('json-server');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pause = require('connect-pause');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = 3001;

server.use(middlewares);

/* let i = 0;

// Every other request to this endpoint sends a 500 error, else continue as normal by calling next()
server.get('/todos', (req, res, next) => {
  if (i % 2 === 0) {
    res
      .status(500)
      .jsonp({ message: "We couldn't get your to do list", code: 'GET_LIST' });
  } else {
    next();
  }
  i += 1;
});

server.post('/todos', (req, res, next) => {
  if (i % 2 === 0) {
    res.status(403).jsonp({
      message: "We couldn't post your to do",
      code: 'POST_TODO_ITEM'
    });
  } else {
    next();
  }
  i += 1;
}); */

server.use(pause(3000));
server.use(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running on port: ${port}`);
});
