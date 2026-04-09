import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    user_role: {type: String, enum: ['user', 'admin'], default: 'user'},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    contact: {type: String, required: true},
    password: {type: String, required: true },
})
const Users = mongoose.model('Users', UsersSchema);
export default  Users;