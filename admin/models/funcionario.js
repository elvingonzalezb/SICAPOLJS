import {Schema, model } from 'mongoose';

const funcionarioSchema = new Schema({
    cedula: { 
        type: String,
        maxlength :20, 
        required: true
    },
    nombre: { 
        type: String,
        maxlength: 80,         
        required: true
    },
    apellido: { 
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
        maxlength: 20
    },
    region: { 
        type: String, 
        maxlength: 50
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