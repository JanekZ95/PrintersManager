import Printer from '../models/printerModel.js';

export const getPrinters = async (req, res, next) => {
    const request = req.query;
    const page = parseInt(request.page) ?? 1;
    const pageSize = parseInt(request.pageSize) ?? 0;

    try {
        if (page < 1 || pageSize < 0) {
            res.status(400).send();
        } else {
            const printers =
        pageSize > 0
            ? await Printer.find({})
                .select(' _id modelName manufacturer')
                .skip(pageSize * (page - 1))
                .limit(pageSize)
            : [];

            res.status(200).json(printers ?? []);
        }
    } catch (error) {
        next(error);
    }
};

export const getPrinterDetails = async (req, res, next) => {
    const id = req.params.id;

    try {
        if (!id) {
            res.status(400).send();
        } else {
            const printer = await Printer.findOne({ _id: id });
            if (!printer) {
                res.status(404).send();
            } else {
                res.status(200).json(printer);
            }
        }
    } catch (error) {
        next(error);
    }
};

export const createPrinter = async (req, res, next) => {
    const printerToCreate = req.body;

    try {
        const printer = await Printer.findOne({
            modelName: printerToCreate.modelName,
            manufacturer: printerToCreate.manufacturer,
        });
        if (printer) {
            res.status(400).send('Printer already exists');
        } else {
            const newPrinter = await Printer.create(printerToCreate);
            res.status(201).json({
                id: newPrinter._id,
                modelName: newPrinter.modelName,
                manufacturer: newPrinter.manufacturer,
                isDuplex: newPrinter.isDuplex,
                isLaser: newPrinter.isLaser,
            });
        }
    } catch (error) {
        next(error);
    }
};

export const updatePrinter = async (req, res, next) => {
    const id = req.params.id;
    const printerToUpdate = req.body;

    try {
        const printer = await Printer.findOne({ _id: id });
        if (!printer) {
            res.status(404).send();
        } else {
            const updatedPrinter = await Printer.findOneAndUpdate(
                { _id: id },
                printerToUpdate
            );
            res.status(200).json({
                id: updatedPrinter._id,
                modelName: updatedPrinter.modelName,
                manufacturer: updatedPrinter.manufacturer,
                isDuplex: updatedPrinter.isDuplex,
                isLaser: updatedPrinter.isLaser,
            });
        }
    } catch (error) {
        next(error);
    }
};

export const deletePrinter = async (req, res, next) => {
    const id = req.params.id;

    try {
        const printer = await Printer.findOne({ _id: id });
        if (!printer) {
            res.status(404).send();
        } else {
            await Printer.deleteOne({ _id: id });
            res.status(200).send();
        }
    } catch (error) {
        next(error);
    }
};
