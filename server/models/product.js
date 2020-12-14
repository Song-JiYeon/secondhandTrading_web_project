const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    writer: {
        type: String,
        requried: true,
    },
    name: {
        type: String,
        requried: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    liking: {
        type: Boolean,
        required: true,
        default: false,
    },
});

mongooseAutoInc.initialize(mongoose.connection);
productSchema.plugin(mongooseAutoInc.plugin, 'product');
//productSchema.plugin(mongooseAutoInc.plugin, 'product');
module.exports = mongoose.model('product', productSchema);
