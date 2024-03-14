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

export const validatorclienteDAG=[
check('Identificacion','se requiere este campo').notEmpty() .isNumeric(),
check('Nombre','campo obloigatorio').notEmpty() .isString(),
check('Direccion','campo obloigatorio').notEmpty().isString(),
check('Telefono','campo obloigatorio').notEmpty().isString(),
check('Fecha_de_nacimiento','campo obloigatorio').notEmpty().custom(isValidDate),
];