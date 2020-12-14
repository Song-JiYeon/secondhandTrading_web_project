const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        requried: true,
    },
    password: {
        type: String,
        required: true,
    },
    state: {
        type: Boolean,
        required: true,
        default: false,
    },
});

mongooseAutoInc.initialize(mongoose.connection);
userSchema.plugin(mongooseAutoInc.plugin, 'user');
//productSchema.plugin(mongooseAutoInc.plugin, 'product');
module.exports = mongoose.model('user', userSchema);
