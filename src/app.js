const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const { loginRouter, userRouter } = require('./routers');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...
app.use('/login', loginRouter);
app.use('/user', userRouter);

app.use(errorHandler);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
