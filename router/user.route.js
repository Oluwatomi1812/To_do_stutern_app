import express from 'express';
import UserController from '../controller/user.controller.js'

// Setting up our User router
const router = new express.Router()

// User Creation Route
router.post("/create", UserController.createUser)//the class dot the function

//Exporting the User Router
export { router }//like module.exports

// export const obj = { name: "james" }

// export function callName(){
//   console.log("Calling ", obj.name)
// }

