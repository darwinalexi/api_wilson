import { check } from "express-validator";

const isValidDate = (value) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(value)) {
        throw new Error('La fecha debe estar en formato YYYY-MM-DD');
    }
    const date = new Date(value);
    if (isNaN(date.getTime())) {
        throw new Error('La fecha proporcionada no es válida');
    }
    return true;
};

export const validatorinteresonDAG =[
    check('Idinteres', 'ingrese los datos correctos').notEmpty().isNumeric(),
    check('mes','ingrese el dato correcto').notEmpty().isNumeric(),
    check('fecha','ingrese el formato correcto').notEmpty().custom(isValidDate),
    check('valor','ingrese el dato correcto').notEmpty() .isNumeric(),
    check('alquiler','ingrese lo correcto').notEmpty() .isNumeric(),
];