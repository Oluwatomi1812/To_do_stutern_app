import { Schema, model }  from "mongoose";

// import what from "where"

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    min: 3,
    max: 150,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    immutable: true,
    validators: {
      match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Please add a valid email string to the email path."]
      /** '/' - beginning and end of expression pattern
       *  '^' - beginning of string, in this case email
       * '[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]' - can contain lower case, upper case or special characters
       * '@' - the @ sign
       * '[a-zA-Z0-9-]' - can contain lower case, upper case or numbers
       * (?:\.[a-zA-Z0-9-]+) - '?:'-subexpression, rest is .com and all
       * '$' - end of string
       * */
    }
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  fullName: String,
}, {
  timestamps: true
})

UserSchema.pre("save", function(next){
  this.fullName = this.firstName + " " +  this.lastName 
  next()
})//creating an object called full name which is the concatenation of the first and last name.

export default model('User', UserSchema)
