"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ProductSchema = new Schema({
    product_name: { type: String, required: true },
    product_price: { type: String, required: true },
    product_quantity: { type: Number, default: 0, required: true },
    product_threshold: { type: Number, default: 10, required: true },
});
const Products = mongoose_1.default.model('Products', ProductSchema);
exports.default = Products;
//# sourceMappingURL=Products.js.map