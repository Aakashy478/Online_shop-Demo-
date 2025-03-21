const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
    {
        userId: { type: String, required: true },
        items: [
            {
                productId: { type: String, required: true },
                quantity: { type: Number, required: true }
            }
        ]

    }
);

module.exports = mongoose.model('Cart', cartSchema);