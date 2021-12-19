const app = require('./app');
const port = 3002;
const db = require('./database');

const routes = require('./rotas');
routes(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
