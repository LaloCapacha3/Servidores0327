import { Schema, model, SchemaTypes} from 'mongoose'

const userSchema = new Schema({
    nombre: {type:SchemaTypes.String, required: true},
    email: {type:SchemaTypes.String, required: true, unique:true},
    password: {type:SchemaTypes.String, required: true}
});

const userModel = model('users', userSchema);

export default userModel;