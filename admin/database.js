import mongoose from 'mongoose';

const dbUrl = 'mongodb://localhost:27017/sicapolg';
mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(mongoose => console.log('Conectado a la BD en el puerto 27017'))
    .catch(err => console.log(err));

module.exports = mongoose;