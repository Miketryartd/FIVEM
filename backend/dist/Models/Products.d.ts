import mongoose from 'mongoose';
declare const Products: mongoose.Model<{
    product_name: string;
    product_price: string;
    product_quantity: number;
    product_threshold: number;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    product_name: string;
    product_price: string;
    product_quantity: number;
    product_threshold: number;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    product_name: string;
    product_price: string;
    product_quantity: number;
    product_threshold: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    product_name: string;
    product_price: string;
    product_quantity: number;
    product_threshold: number;
}, mongoose.Document<unknown, {}, {
    product_name: string;
    product_price: string;
    product_quantity: number;
    product_threshold: number;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    product_name: string;
    product_price: string;
    product_quantity: number;
    product_threshold: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    product_name: string;
    product_price: string;
    product_quantity: number;
    product_threshold: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    product_name: string;
    product_price: string;
    product_quantity: number;
    product_threshold: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Products;
//# sourceMappingURL=Products.d.ts.map