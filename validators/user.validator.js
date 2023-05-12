import Joi from 'joi'

export const createUserValidator = Joi.object({//validate thats it is an object
  username: Joi.string().required(),//validate thats it is a string
  email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  //validate thats it is a string or use ".email()"
  .required()
  .messages({
    'string.pattern.base': 'Email is not a valid email format/address',
  }),
  password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/)
// The password must contain at least one digit ((?=.*\d))
// The password must contain at least one lowercase letter ((?=.*[a-z]))
// The password must contain at least one uppercase letter ((?=.*[A-Z]))
// The password must contain at least one special character ((?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]))
// The password must be at least 8 characters long (.{8,})

  .required()
  .messages({
    'string.pattern.base': 'You need one number, one alphanumeric character and one in caps, password be more than 7 characters long',
  }),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
}).strict()//must contains keys/characters specified in the schema
