import mongoose from  'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: {type: String, required: true},
    product_price: {type: String, required: true},
    product_quantity: {type: Number, default: 0 ,required: true},
    product_threshold: {type: Number, default: 10, required: true},
})

const Products = mongoose.model('Products', ProductSchema);
export default Products;