import { check } from "express-validator";
export const validatorrticleDAG=[
    check('idarticulo','se necessita el de del articulo') .notEmpty().isNumeric(),
    check('nombre','nombre es requeido') .notEmpty().isString(),
    check('tipo','tipo es requerido para el registro') .notEmpty().isString(),
];