import app from './app';
import database from './database';

//somente usar o force na criação da tabela, uma única vez
//database.sync({force: true});
database.sync(); 
console.log('Database running at 3306');

app.listen(3000);
console.log('Server running at 3000');