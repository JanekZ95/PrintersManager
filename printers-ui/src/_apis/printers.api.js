const { axiosWrapper } = require('_helpers/axios-wrapper');

export const Api = {
    getPrinters,
    getPrinterDetails,
    updatePrinter,
    deletePrinter,
    createPrinter,
};

async function getPrinters({ query, currentPage, pageSize }) {
    const response = await axiosWrapper.get(
        `/api/printers?query=${query}&page=${currentPage}&pageSize=${pageSize}`
    );

    return {
        ...response,
        printers: response.printers.map((p) => {
            return {
                id: p._id,
                modelName: p.modelName,
                manufacturer: p.manufacturer,
            };
        }),
    };
}

async function getPrinterDetails(id) {
    const response = await axiosWrapper.get(`/api/printers/${id}`);
    return {
        id: response._id,
        ...response,
    };
}

async function updatePrinter(printer) {
    return await axiosWrapper.put(`/api/printers/${printer.id}`, {
        modelName: printer.modelName,
        manufacturer: printer.manufacturer,
        isDuplex: printer.isDuplex,
        isLaser: printer.isLaser,
    });
}

async function createPrinter(printer) {
    return await axiosWrapper.post('/api/printers', {
        modelName: printer.modelName,
        manufacturer: printer.manufacturer,
        isDuplex: printer.isDuplex,
        isLaser: printer.isLaser,
    });
}

async function deletePrinter(id) {
    return await axiosWrapper.delete(`/api/printers/${id}`);
}
