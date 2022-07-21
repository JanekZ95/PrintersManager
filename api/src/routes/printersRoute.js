import express from 'express';
import { ROLES_LIST } from '../config/constants.js';
import * as printersController from '../controllers/printersController.js';
import { verifyRoles } from '../middlewares/verifyRolesMiddleware.js';

const printersRouter = express.Router();

printersRouter
    .get(
        '/',
        verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User),
        printersController.getPrinters
    )
    .get(
        '/:id',
        verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User),
        printersController.getPrinterDetails
    )
    .post('/', verifyRoles(ROLES_LIST.Admin), printersController.createPrinter)
    .put(
        '/:id',
        verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User),
        printersController.updatePrinter
    )
    .delete(
        '/:id',
        verifyRoles(ROLES_LIST.Admin),
        printersController.deletePrinter
    );

export default printersRouter;
