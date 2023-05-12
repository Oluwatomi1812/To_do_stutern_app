import User from "../model/user.model.js"
import { createUserValidator } from "../validators/user.validator.js"

export default class UserController {

  static async createUser(req, res, next ) {

    // Joi validation
    const {error, value} = await createUserValidator.validate(req.body)//create variable named error and validate
    //and extracts them from the validation
    if(error){
      console.log(error.details)//log the details of the error
      const err = new Error(error.details[0].message)// create a new error with the error message of the first error
      err.status = 400
      err.message = error.details[0].message
      return next(err)
    }
    try{
      const newUser = await User.create(req.body)//create new user
      res.status(200).json({
        message: "User created successfully",
        status: "Success",
        data:{
          user: newUser
        }
      })
    }catch(err){
      console.log(err.message)
      next(err)//passed to the global error handler in the app.js
    }
  }
}
