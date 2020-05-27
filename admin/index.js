import express  from 'express';
import morgan  from 'morgan';
import cors from 'cors';
import path from 'path';
import database from './database';
import router from './routes';

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', router);

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto:' + app.get('port'));
});
