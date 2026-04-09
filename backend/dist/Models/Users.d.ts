import mongoose from 'mongoose';
declare const Users: mongoose.Model<{
    user_type: "user" | "admin";
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    password: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    user_type: "user" | "admin";
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    user_type: "user" | "admin";
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    user_type: "user" | "admin";
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    password: string;
}, mongoose.Document<unknown, {}, {
    user_type: "user" | "admin";
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    user_type: "user" | "admin";
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    user_type: "user" | "admin";
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    user_type: "user" | "admin";
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Users;
//# sourceMappingURL=Users.d.ts.map