const { orderService } = require('../service');

const getOrderList = async (req, res) => {
    try {
        const orders = await orderService.getOrderList();
        res.status(200).json(
            {
                status: 'success',
                data: orders
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
};

const addOrder = async (req, res) => {
    try {
        const order = await orderService.addOrder(req.body);
        res.status(201).json(
            {
                status: 'success',
                data: order
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
};

const updateOrder = async (req, res) => {
    try {
        const order = await orderService.updateOrder(req.params.id, req.body);
        res.status(200).json(
            {
                status: 'success',
                data: order
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
};

const deleteOrder = async (req, res) => {
    try {
        await orderService.deleteOrder(req.params.id);
        res.status(204).json(
            {
                status: 'success',
                data: null
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
};

module.exports = {
    getOrderList,
    addOrder,
    updateOrder,
    deleteOrder
};
