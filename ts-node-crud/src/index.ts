import App from './app'
import database from './database';

/* conenting to database */
database();

/* starting the server*/
const app = new App();
app.start();
