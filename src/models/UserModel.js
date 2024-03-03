const mongoose=require('mongoose')

const userSchema = new mongoose.Schema(
    {
        userName:{type:String, required:true},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        phone: {
            type: String,
            validate: {
              validator: function(v) {
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(v);
              },
              message: props => `${props.value} is not a valid phone number!`
            },
            required: [true, 'User phone number required']
          }
    },
    {versionKey: false}
)

const UserModel = mongoose.model("users",userSchema)

module.exports = UserModel 