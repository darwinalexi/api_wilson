import mongoose from 'mongoose';

const interesesDAG = new mongoose.Schema({
    Idinteres: {
        type: Number,
        required: true,
        integer:true
    },
    mes: {
        type: Number,
        required: true,
        integer: true
    },
    fecha: {
        type: Date,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    alquiler: {
        type: Number,
        required: true,
        integer: true
    },
    estado:{
        type:String,
        required:true
    },
    cliente:{
        type:Number,
        required:true
    }
}, 
    {
    timestamps: true
    }
);

const Intereses = mongoose.model("Intereses", interesesDAG);

export default Intereses;
