const Order = require('../model/order.model');

let getOrderList = () => {
    return Order.find().populate([
        {
            path: 'items.productId',
            select: '_id name price'
        },{
            path: 'customerName',
            select: 'email'
        }
    ]);
};

let addOrder = (orderData) => {
    return Order.create(orderData);
};

let updateOrder = (orderId, orderData) => {
    return Order.findByIdAndUpdate({ _id: orderId }, orderData, { new: true });
};

let deleteOrder = (orderId) => {
    return Order.findByIdAndDelete({ _id: orderId });
};

module.exports = {
    getOrderList,
    addOrder,
    updateOrder,
    deleteOrder
};
