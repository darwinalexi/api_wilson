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

export const validatoralquilerDAG=[
    check('idialquiler','se necesita un id').notEmpty().isNumeric(),
    check('valor','se necesita un valor').notEmpty().isNumeric(),
    check('fecha','se necesita una fecha').notEmpty().custom(isValidDate),
    check('Mes','se necesita un mesr').notEmpty().isNumeric(),
    check('Descripcion','se necesita un DESCRIPCION').notEmpty().isString(),
    check('Interes_por_pagar','se necesita un interesr').notEmpty().isNumeric(),
    check('Cliente','se necesita un cliente').notEmpty().isNumeric(),
    check('Articulo','se necesita un articulo').notEmpty().isNumeric(),

]