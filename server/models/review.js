const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    writer: {
        type: String,
        requried: true,
    },
    title: {
        type: String,
        requried: true,
    },
    content: {
        type: String,
        required: true,
    },
    recommend: {
        type: String,
        required: true,
    }
});

mongooseAutoInc.initialize(mongoose.connection);
reviewSchema.plugin(mongooseAutoInc.plugin, 'review');
//productSchema.plugin(mongooseAutoInc.plugin, 'product');
module.exports = mongoose.model('review', reviewSchema);
