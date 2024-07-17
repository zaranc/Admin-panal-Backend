const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema',
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'productSchema',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        }
    }]
});

const Order = mongoose.model('orderSchema', orderSchema);

module.exports = Order;
