import mongoose from 'mongoose';

const printerSchema = mongoose.Schema(
    {
        modelName: String,
        manufacturer: String,
        isDuplex: Boolean,
        isLaser: Boolean,
    },
    { collection: 'printers' }
);

const Printer = mongoose.model('Printer', printerSchema);

export default Printer;
