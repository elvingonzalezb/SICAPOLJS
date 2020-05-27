import {Schema, model } from 'mongoose';

const funcionarioSchema = new Schema({
    cedula: { 
        type: String,
        maxlength :20, 
        required: true
    },
    nombres: { 
        type: String,
        maxlength: 80,         
        required: true
    },
    apellidos: { 
        type: String, 
        maxlength: 80
    },
    jerarquia: { 
        type: String,
        maxlength: 30
    },
    cargo: { 
        type: String, 
        maxlength: 50
    },
    comisaria: { 
        type: String, 
        maxlength: 100
    },
    region: { 
        type: String, 
        maxlength: 50
    },
    estatus: { 
        type: String, 
        maxlength: 20
    },
    estado: { 
        type: Number, 
        default: 1
    },
	createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

export default model('Funcionario', funcionarioSchema);